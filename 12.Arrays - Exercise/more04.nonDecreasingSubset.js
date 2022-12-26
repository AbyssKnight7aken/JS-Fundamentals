function nonDecreasingSubset(array) {

    let maxNumber = array[0];
    let arrayLength = array.length;
    let newArray = [array[0]];

    for (let i = 1; i < arrayLength; i++) {
        let currentNumber = array[i];
        if (currentNumber >= maxNumber) {
            newArray.push(currentNumber);
            maxNumber = currentNumber;
        }
    }

    console.log(newArray.join(` `));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([1, 2, 3, 4])
nonDecreasingSubset([20, 3, 2, 15, 6, 1])