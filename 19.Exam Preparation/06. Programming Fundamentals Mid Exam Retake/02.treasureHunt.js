function treasureHunt(inputData) {

    let treasureChest = inputData.shift().split(`|`);
    let index = 0;
    let operations = inputData[index].split(` `);
    let command = operations.shift();

    while (command !== `Yohoho!`) {

        for (let i = 0; i < operations.length; i++) {

            let item = operations[i];

            switch (command) {
                case `Loot`:
                    if (!treasureChest.includes(item)) {
                        treasureChest.unshift(item);
                    }
                    break;

                case `Drop`:
                    if (treasureChest[item]) {
                        let removedItem = treasureChest.splice(item, 1);
                        treasureChest.push(removedItem);
                    }
                    break;

                case `Steal`:
                    let stolenItems = 0;
                    if (item >= treasureChest.length) {
                        stolenItems = treasureChest.slice(0);
                        treasureChest = [];
                    }
                    else {
                        stolenItems = treasureChest.slice(-item);
                        treasureChest.splice(treasureChest.length - item, item);
                    }
                    console.log(stolenItems.join(`, `));
                    break;
            }
        }
        index++;
        operations = inputData[index].split(` `);
        command = operations.shift();
    }

    if (treasureChest.length <= 0) {
        console.log(`Failed treasure hunt.`);
    }
    else {
        let totalItemsLength = 0;
        for (let x = 0; x < treasureChest.length; x++) {
            let currentItem = treasureChest[x];
            totalItemsLength += currentItem.length;
        }
        let averageItemLength = totalItemsLength / treasureChest.length;
        console.log(`Average treasure gain: ${averageItemLength.toFixed(2)} pirate credits.`);
    }

}

treasureHunt
// (["Gold|Silver|Bronze|Medallion|Cup",
//     "Loot Wood Gold Coins",
//     "Loot Silver Pistol",
//     "Drop 3",
//     "Steal 3",
//     "Yohoho!"])

treasureHunt
    (["Diamonds|Silver|Shotgun|Gold",
        "Loot Silver Medals Coal",
        "Drop -1",
        "Drop 1",
        "Steal 9",
        "Yohoho!"])