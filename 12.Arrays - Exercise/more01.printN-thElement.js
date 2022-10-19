function printNthElement(input) {

    let step = Number(input[input.length - 1]);
    let buffer = [];

    for (let i = 0; i < input.length - 1; i += step) {
        buffer.push(input[i]);
    }

    console.log(buffer.join(` `));

}

printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])