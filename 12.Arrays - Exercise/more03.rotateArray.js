function rotateArray(inputArray) {

    const array = inputArray.slice();
    let steps = Number(array[array.length - 1]);
    array.pop();

    for (let i = 0; i < steps; i++) {
        let elementToMove = array.pop();
        array.unshift(elementToMove);
    }
    console.log(array.join(` `));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])