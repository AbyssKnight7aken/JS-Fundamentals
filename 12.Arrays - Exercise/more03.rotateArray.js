function rotateArray(array) {

    let steps = Number(array[array.length - 1]);
    let arrayLength = array.length;
    array.pop();

    for (let i = 0; i < steps; i++) {
        let elementToMove = array.pop();
        array.unshift(elementToMove);
    }
    console.log(array.join(` `));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])