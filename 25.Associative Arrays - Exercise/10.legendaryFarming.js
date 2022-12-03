function legendaryFarming(input) {

    const inputData = input.split(' ');
    const legendaryItems = {};
    const itemsMap = new Map();
    itemsMap.set('Shadowmourne', 'shards');
    itemsMap.set('Valanyr', 'fragments');
    itemsMap.set('Dragonwrath', 'motes');
    let legendaryItem = '';
    const junkMaterials = new Map();
    let isObtained = false;

    for (let index = 0; index < inputData.length; index += 2) {
        if (isObtained) { break; }
        const currentMaterial = inputData[index + 1].toLowerCase();
        const currentValue = Number(inputData[index]);

        switch (currentMaterial) {
            case 'shards': legendaryItem = 'Shadowmourne';
                farm(legendaryItem, currentMaterial, currentValue); break;
            case 'fragments': legendaryItem = 'Valanyr';
                farm(legendaryItem, currentMaterial, currentValue); break;
            case 'motes': legendaryItem = 'Dragonwrath';
                farm(legendaryItem, currentMaterial, currentValue); break;
            default:
                if (!junkMaterials.has(currentMaterial)) {
                    junkMaterials.set(currentMaterial, currentValue);
                } else {
                    let oldValue = junkMaterials.get(currentMaterial);
                    junkMaterials.set(currentMaterial, oldValue + currentValue)
                }
                break;
        }
    }


    for (const [key, name] of itemsMap) {
        legendaryItems[key] = { material: name, value: 0 };
    }

    let sorted = Object.entries(legendaryItems)
        .sort((a, b) => { return b[1].value - a[1].value || a[1].material.localeCompare(b[1].material) });

    sorted.forEach(el => { console.log(`${el[1].material}: ${el[1].value}`); });

    let sortedJunk = Array.from(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    sortedJunk.forEach(junk => { console.log(`${junk[0]}: ${junk[1]}`); });


    function farm(item, material, value) {
        if (!legendaryItems[item]) {
            legendaryItems[item] = { material, value };
            itemsMap.delete(item);
        } else {
            legendaryItems[item].value += value;
        }

        if (legendaryItems[legendaryItem].value >= 250) {
            legendaryItems[item].value -= 250;
            isObtained = true;
            return console.log(`${legendaryItem} obtained!`);
        }
    }

}

//legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')