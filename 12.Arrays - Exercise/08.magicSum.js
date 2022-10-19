function magicSum(array, number) {

    let arrayLength = array.length;
    let magicNumber = Number(number);

    for (let a = 0; a < arrayLength - 1; a++) {
        let firstNumber = Number(array[a]);
        for (let b = a + 1; b < arrayLength; b++) {
            let secondNumber = Number(array[b]);
            let sum = firstNumber + secondNumber;
            if (sum === magicNumber) {
                console.log(firstNumber + ` ` + secondNumber);
            }
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)