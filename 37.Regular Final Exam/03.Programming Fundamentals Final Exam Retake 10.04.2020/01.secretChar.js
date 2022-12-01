function secretChar(input) {

    let message = input.shift();
    let entry = input.shift();

    while (entry !== 'Reveal') {

        let command = entry.split(':|:')[0];
        let value1 = entry.split(':|:')[1];

        switch (command) {

            case 'InsertSpace':
                message = message.substring(0, Number(value1)) + ' ' + message.substring(Number(value1));
                console.log(message);
                break;

            case 'Reverse':
                if (message.includes(value1)) {
                    let index = message.indexOf(value1);
                    let reversedValue = value1.split('').reverse().join('');
                    message = message.substring(0, index) + message.substring(index + value1.length) + reversedValue;
                    console.log(message);
                } else {
                    console.log(`error`);
                }
                break;
                
            case 'ChangeAll':
                let replacement = entry.split(':|:')[2];
                while (message.includes(value1)) {
                    message = message.replace(value1, replacement);
                }
                console.log(message);
                break;
        }


        entry = input.shift();
    }

    console.log(`You have a new text message: ${message}`);

}

// secretChar([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'])

secretChar([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])  