function bombasticNumbers(array, commands) {

    let bombasticNumber = Number(commands[0]);
    let power = Number(commands[1]);
    let detonationRange = 0;
    let index = 0;

    while (index < array.length) {

        let currentNumber = Number(array[index]);
        if (currentNumber === bombasticNumber) {
            let detonationIndex = Math.max((index - power), 0);
            if (detonationIndex < 0) { detonationRange = power + 1; }
            else { detonationRange = (power * 2) + 1; }
            array.splice(detonationIndex, detonationRange);
            index = 0;
            continue;
        }

        index++
    }

    console.log(array.reduce((a, b) => a + b, 0));

}

//bombasticNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
//bombasticNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombasticNumbers([1, 7, 7, 1, 2, 3], [7, 1])
//bombasticNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
//bombasticNumbers([2, 1, 2, 1, 1, 1, 2, 1, 1, 2], [2, ])