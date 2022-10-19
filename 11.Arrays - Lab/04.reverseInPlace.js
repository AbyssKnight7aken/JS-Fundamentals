function reverseInPlace(array) {

    for (let i = 0; i < array.length / 2; i++) {
        let tempElement = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tempElement;
    }

    console.log(array.join(` `));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])