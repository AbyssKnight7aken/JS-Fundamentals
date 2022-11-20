function passwordReset(input) {

    let rawPassword = input.shift();
    let line = input.shift();
    let command = line.split(' ')[0];

    while (command !== 'Done') {

        let value1 = line.split(' ')[1];
        let value2 = line.split(' ')[2];

        switch (command) {
            case "TakeOdd": takeOdd(); break;
            case "Cut": cut(value1, value2); break;
            case "Substitute": substitute(value1, value2); break;
        }

        line = input.shift();
        command = line.split(' ')[0];
    };

    console.log(`Your password is: ${rawPassword}`);

    function takeOdd() {
        let updatedRawPassword = '';
        for (let index = 0; index < rawPassword.length; index++) {
            let currentChar = rawPassword[index];
            if (index % 2 !== 0) {
                updatedRawPassword += currentChar;
            }
        }
        rawPassword = updatedRawPassword;
        console.log(rawPassword);
    }

    function cut(index, length) {
        let substring1 = rawPassword.substring(0, Number(index));
        let substring2 = rawPassword.substring(Number(index) + Number(length));
        rawPassword = substring1 + substring2;
        console.log(rawPassword);
    }

    function substitute(substring, substitute) {
        if (rawPassword.includes(substring)) {
            while (rawPassword.includes(substring)) {
                rawPassword = rawPassword.replace(substring, substitute);
            }
            console.log(rawPassword);
        } else {
            console.log(`Nothing to replace!`);
        }
    }
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

