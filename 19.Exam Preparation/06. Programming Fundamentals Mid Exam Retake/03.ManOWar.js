function manOWar(inputData) {

    let pirateShip = inputData.shift().split(`>`).map(Number);
    let warShip = inputData.shift().split(`>`).map(Number);
    const maxHealth = Number(inputData.shift());
    let index = 0;
    let operations = inputData[index].split(` `);
    let command = operations[index];
    let victory = false;
    let defeat = false;

    while (command !== `Retire`) {

        let value1 = Number(operations[1]);
        let value2 = Number(operations[2]);
        let value3 = Number(operations[3]);

        switch (command) {
            case `Fire`:
                fire(value1, value2);
                if (victory) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                break;

            case `Defend`:
                defend(value1, value2, value3);
                if (defeat) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    return;
                }
                break;

            case `Repair`: repair(value1, value2); break;

            case `Status`: status(); break;
        }
        index++;
        operations = inputData[index].split(` `);
        command = operations[0];
    }

    function fire(index, damage) {
        if (warShip[index]) {
            warShip[index] -= damage;
            if (warShip[index] <= 0) {
                victory = true;
                return;
            }
        }
    }

    function defend(startIndex, endIndex, damage) {
        if (pirateShip[startIndex] && pirateShip[endIndex]) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
                if (pirateShip[i] <= 0) {
                    defeat = true;
                    return;
                }
            }
        }
    }

    function repair(index, health) {
        if (pirateShip[index]) {
            pirateShip[index] += health;
            if (pirateShip[index] > maxHealth) {
                pirateShip[index] = maxHealth;
            }
        }
    }

    function status() {
        let count = 0;
        let critcalState = maxHealth * 0.2;
        for (let x = 0; x < pirateShip.length; x++) {
            if (pirateShip[x] < critcalState) {
                count++;
            }
        }
        console.log(`${count} sections need repair.`);
    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`);

}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])

manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
