function oddAndEvenSum(number) {

    let numberToString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    let numberLength = numberToString.length;

    for (let i = 0; i < numberLength; i++) {
        let currentDigit = Number(numberToString[i]);
        currentDigit % 2 === 0 ?
            evenSum += currentDigit :
            oddSum += currentDigit;
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)