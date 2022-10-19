function houseParty(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        let command = array[i].split(` `);
        let name = command[0];
        let action = command[2];
        if (action === `going!`) {
            if (newArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                newArray.push(name);
            }

        }
        else {
            if (newArray.includes(name)) {
                newArray = newArray.filter(x => x !== name);
            }
            else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(newArray.join(`\n`));

}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])