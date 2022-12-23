function arrayRotation(inputArray, rotations) {

    const array = inputArray.slice();
    for (let i = 0; i < rotations; i++) {
        let numberToMove = array.shift();
        array.push(numberToMove);
    }

    console.log(array.join(` `));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)