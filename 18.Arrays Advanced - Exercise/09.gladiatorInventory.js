function gladiatorInventory(array) {

    let inventory = array.shift().split(` `);
    let arrLength = array.length;

    for (let i = 0; i < arrLength; i++) {
        operation = array[i].split(` `);
        command = operation[0];
        equipment = operation[1];

        switch (command) {
            case `Buy`:
                buy(equipment);
                break;
            case `Trash`:
                trash(equipment);
                break;
            case `Repair`:
                repair(equipment);
                break;
            case `Upgrade`:
                upgrade(equipment);
                break;
        }
    }

    function buy(item) {
        if (!(inventory.includes(item))) {
            inventory.push(item);
        }
    }

    function trash(item) {
        if (inventory.includes(item)) {
            inventory = inventory.filter(x => x !== item);
        }
    }

    function repair(item) {
        if (inventory.includes(item)) {
            let index = inventory.indexOf(item);
            inventory.splice(index, 1);
            inventory.push(item);
        }
    }

    function upgrade(item) {
        let upgradedItem = item.split(`-`);
        let equipmentToUpgrade = upgradedItem[0];
        let upgradeName = upgradedItem[1];
        if (inventory.includes(equipmentToUpgrade)) {
            let index = inventory.indexOf(equipmentToUpgrade);
            inventory.splice(index + 1, 0, `${equipmentToUpgrade}:${upgradeName}`);
        }
    }

    console.log(inventory.join(` `));

}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])