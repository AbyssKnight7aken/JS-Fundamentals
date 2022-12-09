function stringGame(input) {

    const inputData = input.slice();
    let text = inputData.shift();
    let entry = inputData.shift();

    while (entry !== 'Done') {

        let [command, value1, value2] = entry.split(' ');

        switch (command) {
            case 'Change': change(value1, value2); break;
            case 'Includes': include(value1); break;
            case 'End': ends(value1); break;
            case 'Uppercase': upper(); break;
            case 'FindIndex': findIndex(value1); break;
            case 'Cut': cut(value1, value2); break;
        }

        entry = inputData.shift();
    }

    function change(char, replacement) {
        const regex = new RegExp(char, 'g')
        text = text.replace(regex, replacement);
        console.log(text);
    }

    function include(substring) {
        if (text.includes(substring)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function ends(substring) {
        if (text.endsWith(substring)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function upper() {
        text = text.toUpperCase();
        console.log(text);
    }

    function findIndex(char) {
        let index = text.indexOf(char);
        console.log(index);
    }

    function cut(startIndex, count) {
        count = Number(count);
        startIndex = Number(startIndex);
        let str = text.substring(startIndex, startIndex + count);
        console.log(str);
    }

}

stringGame([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])

// stringGame([
//     "*S0ftUni is the B3St Plac3**",
//     "Change 2 o",
//     "Includes best",
//     "End is",
//     "Uppercase",
//     "FindIndex P",
//     "Cut 3 7",
//     "Done"])
