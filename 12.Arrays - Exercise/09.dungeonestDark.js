function dungeonestDark(array) {

    let level = array[0].split(`|`);
    let rooms = 0;
    let health = 100;
    let coins = 0;
    let levelLength = level.length;

    while (rooms < levelLength) {

        let operation = level[rooms].split(` `);
        let action = operation[0];
        let value = Number(operation[1]);

        if (action === `potion`) {
            if (health + value <= 100) {
                health += value;
            }
            else {
                value = 100 - health;
                health = 100;
            }
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        }

        else if (action === `chest`) {
            coins += value;
            console.log(`You found ${value} coins.`);
        }

        else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${action}.`);
            }
            else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${rooms + 1}`);
                break;
            }
        }
        rooms++;
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])