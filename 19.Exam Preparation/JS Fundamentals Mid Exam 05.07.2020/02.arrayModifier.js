function arrayModifier(array) {

    let resultArray = array.shift().split(' ').map(Number);

    for (let command of array) {
        let [action, indexOne, indexTwo] = command.split(' ');

        if (action === 'swap') {
            swap(resultArray, indexOne, indexTwo);
        } else if (action === 'multiply') {
            multiply(resultArray, indexOne, indexTwo);
        } else if (action === 'decrease') {
            decrease(resultArray);
        }
    }

    function swap(resultArray, indexOne, indexTwo) {
        [resultArray[indexOne], resultArray[indexTwo]] = [resultArray[indexTwo], resultArray[indexOne]];
    }

    function multiply(resultArray, indexOne, indexTwo) {
        let multiply = Number(resultArray[indexOne] * resultArray[indexTwo]);
        resultArray.splice(indexOne, 1, multiply);
    }

    function decrease(arrayInput) {
        resultArray = arrayInput.map((num) => num - 1);
    }

    console.log(resultArray.join(", "));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])