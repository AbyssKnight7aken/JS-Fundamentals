function theImitationGame(inputData) {

    let message = inputData.shift();
    let entry = inputData.shift();

    while (entry !== 'Decode') {

        let command = entry.split(`|`)[0];
        let value1 = entry.split(`|`)[1];
        let value2 = entry.split(`|`)[2];

        switch (command) {
            case 'Move': move(value1); break;
            case 'Insert': insert(value1, value2); break;
            case 'ChangeAll': changeAll(value1, value2); break;
        }

        entry = inputData.shift();
    }

    console.log(`The decrypted message is: ${message}`);


    function move(lettersCount) {
        message = message.substring(Number(lettersCount)) + message.substring(0, Number(lettersCount));
    }

    function insert(index, value) {
        message = message.substring(0, Number(index)) + value + message.substring(index);
    }

    function changeAll(substring, replacement) {
        while (message.includes(substring)) {
            message = message.replace(substring, replacement);
        }
    }

}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])