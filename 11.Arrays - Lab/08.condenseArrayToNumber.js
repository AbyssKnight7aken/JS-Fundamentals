function condenseArrayToNumber(inputAarray) {

    let array = inputAarray.slice();
    let sum = 0;
    let arrayLength = array.length;

    if (arrayLength === 1) { sum = array[0]; }

    while (arrayLength > 1) {

        let condensedArray = [];

        for (let i = 0; i < arrayLength - 1; i++) {
            sum = array[i] + array[i + 1];
            condensedArray.push(sum);
        }

        array = condensedArray;
        arrayLength--;

    }

    console.log(sum);

}

condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])