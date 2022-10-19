function arrayManipulations(inputArray) {

    let array = inputArray.shift().split(` `).map(Number);

    for (let i = 0; i < inputArray.length; i++) {
        let operation = inputArray[i].split(` `);
        command = operation[0];
        let firstNum = Number(operation[1]);
        let secondNum = Number(operation[2]);

        function add(element) {
            array.push(element);
        }

        function remove(number) {
            array = array.filter(element => element !== number);
        }

        function RemoveAt(index) {
            array.splice(index, 1);
        }

        function insert(number, index) {
            array.splice(index, 0, number);
        }

        switch (command) {
            case `Add`:
                add(firstNum); break;
            case `Remove`:
                remove(firstNum); break;
            case `RemoveAt`:
                RemoveAt(firstNum); break;
            case `Insert`:
                insert(firstNum, secondNum); break;
        }
    }

    console.log(array.join(` `));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])