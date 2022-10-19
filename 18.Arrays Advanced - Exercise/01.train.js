function train(inputArray) {

    let wagons = inputArray.shift().split(` `).map(Number);
    let maxPassengers = Number(inputArray.shift());

    function addPassengers(passengersCount) {
        for (let wagonNumber = 0; wagonNumber < wagons.length; wagonNumber++) {

            let currentPassengers = Number(wagons[wagonNumber]);
            if (passengersCount <= maxPassengers - currentPassengers) {
                wagons[wagonNumber] += Number(passengersCount);
                break;
            }
        }
    }

    for (let i = 0; i < inputArray.length; i++) {

        let operation = inputArray[i].split(` `);
        let command = operation[0];

        if (command === `Add`) {
            wagons.push(Number(operation[1]));
        }
        else {
            let newPassengers = Number(command);
            addPassengers(newPassengers);
        }

    }

    //return wagons.join(` `);
    console.log(wagons.join(` `));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6'])