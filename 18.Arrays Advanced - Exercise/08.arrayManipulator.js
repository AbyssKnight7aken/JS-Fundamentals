function arrayManipulator(dataArray, commandsArray) {

    let array = dataArray.slice();
    let arrLength = commandsArray.length;

    for (let i = 0; i < arrLength; i++) {
        let operations = commandsArray[i].split(` `);
        let command = operations[0];
        let commandElements = operations.slice(1).map(Number);

        switch (command) {
            case `add`: add(commandElements[1], commandElements[0]); break;
            case `addMany`: addMany(commandElements); break;
            case `contains`: contains(commandElements[0]); break;
            case `remove`: remove(commandElements[0]); break;
            case `shift`: shift(commandElements[0]); break;
            case `sumPairs`: sumPairs(); break;
            case `print`: print(); break;
        }
    }

    function add(element, index) {
        array.splice(index, 0, element);

    }

    function addMany(inputArray) {
        let index = inputArray[0];
        let elements = inputArray.slice(1);

        for (let a = 0; a < elements.length; a++) {
            array.splice(index + a, 0, elements[a]);
        }
    }

    function contains(element) {
        if (array.includes(element)) { console.log(array.indexOf(element)); }
        else { console.log(-1); }
    }

    function remove(index) {
        array.splice(index, 1);
    }

    function shift(positions) {
        for (let k = 0; k < positions; k++) {
            firstEl = array.shift();
            array.push(firstEl);
        }
    }

    function sumPairs() {
        let modifiedArray = [];
        let sum = 0;
        for (let x = 0; x < array.length; x += 2) {
            if (x === array.length - 1) { sum = array[x]; }
            else { sum = array[x] + array[x + 1]; }
            modifiedArray.push(sum);
        }
        array = modifiedArray.slice(0);
        return array;
    }

    function print() {
        console.log(`[ ${array.join(`, `)} ]`);
    }

}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrayManipulator([1, 2, 4, 5, 6, 7, 8], ['sumPairs', 'print'])