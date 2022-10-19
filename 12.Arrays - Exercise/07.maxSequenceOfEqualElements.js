function maxSequenceOfEqualElements(array) {

    let arrayLength = array.length;
    let tempArray = [];
    let maxArray = [];

    for (let i = 0; i < arrayLength - 1; i++) {

        tempArray = [array[i]];

        for (let s = i + 1; s < arrayLength; s++) {
            if (array[i] !== array[s]) { break; }

            while (array[i] === array[s]) {

                tempArray.push(array[s]);
                s++;
            }
            if (tempArray.length > maxArray.length) { maxArray = tempArray; }
        }
    }

    console.log(maxArray.join(` `));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])