function valueOfAString(inputData) {

    const string = inputData.shift();
    const command = inputData.shift();
    let lowerCaseValue = 0;
    let upperCaseValue = 0;

    for (const char of string) {
        const value = char.charCodeAt();
        const isCapLetter = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
        const isSmallLetter = char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
        if (isCapLetter) { upperCaseValue += value; }
        else if (isSmallLetter) { lowerCaseValue += value; }
    }

    if (command === 'LOWERCASE') { console.log(`The total sum is: ${lowerCaseValue}`); }
    else if (command === 'UPPERCASE') { console.log(`The total sum is: ${upperCaseValue}`); }

}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
valueOfAString(['AC/DC', 'UPPERCASE'])