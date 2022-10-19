function equalArrays(array1, array2) {

    let sum = 0;
    let isEqual = true;
    let currentElement = 0;

    for (let index = 0; index <= array1.length - 1; index++) {
        if (Number(array1[index]) === Number(array2[index])) {
            sum += Number(array1[index]);
        } else {
            isEqual = false;
            currentElement = index;
            break;
        }
    }

    isEqual ?
        console.log(`Arrays are identical. Sum: ${sum}`) :
        console.log(`Arrays are not identical. Found difference at ${currentElement} index`);

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['1'], ['10'])