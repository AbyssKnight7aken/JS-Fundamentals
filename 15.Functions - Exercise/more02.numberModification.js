function numberModification(inputNumber) {

    let numberToString = inputNumber.toString();
    let numLength = numberToString.length;
    let sum = 0;

    for (let i = 0; i < numLength; i++) {
        let currentDigit = Number(numberToString[i]);
        sum += currentDigit;
    }

    averageSum = sum / numLength;

    while (averageSum < 5) {
        numberToString += `9`;
        sum += 9;
        numLength++;
        averageSum = sum / numLength;
    }

    return numberToString;

}

numberModification(101)
numberModification(5835)