function passwordValidator(password) {

    let passLength = password.length;
    let digitsCounter = 0;
    let isSymbol = false;

    for (let i = 0; i < passLength; i++) {

        let charNum = password[i].charCodeAt();
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitsCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }
    }

    if (passLength < 6 || passLength > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (isSymbol) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (digitsCounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }

    if (digitsCounter >= 2 && !isSymbol && (passLength >= 6 || passLength <= 10)) {
        console.log(`Password is valid`);
    }

}

passwordValidator('logIn')
//passwordValidator('MyPass123')
//passwordValidator('Pa$s$s')