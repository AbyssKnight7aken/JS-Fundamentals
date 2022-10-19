function equalSums(array) {

    let currentElement = `no`;
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < index; left++) {
            leftSum += Number(array[left]);
        }

        for (let right = index + 1; right < arrayLength; right++) {
            rightSum += Number(array[right]);
        }

        if (leftSum === rightSum) { currentElement = index; }
    }

    console.log(currentElement);

}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])