function numbers(input) {

    const inputData = input.slice();
    let numbers = inputData.shift().split(` `).map(Number);
    let operation = inputData.shift().split(` `);
    let command = operation[0];

    while (command !== `Finish`) {

        let value1 = Number(operation[1]);
        let value2 = Number(operation[2]);

        switch (command) {
            case `Add`: add(value1); break;
            case `Remove`: remove(value1); break;
            case `Replace`: replace(value1, value2); break;
            case `Collapse`: collapse(value1); break;
        }
        operation = inputData.shift().split(` `);
        command = operation[0];

    }

    function add(data) {
        numbers.push(data);
    }

    function remove(data) {
        if (numbers.includes(data)) {
            let index = numbers.indexOf(data);
            numbers.splice(index, 1);
        }
    }

    function replace(data1, data2) {
        if (numbers.includes(data1)) {
            let index = numbers.indexOf(data1);
            numbers.splice(index, 1, data2);
        }

    }

    function collapse(data) {
        numbers = numbers.filter(x => x >= data);
    }

    console.log(numbers.join(` `));
}

numbers((["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
)

numbers((["1 20 -1 10",
    "Collapse 8",
    "Finish"])
)