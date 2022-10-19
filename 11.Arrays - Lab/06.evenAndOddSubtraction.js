function evenAndOddSubtraction(input) {

    let sum = 0;

    for (let index of input) {
        let currentNumber = Number(index);
        currentNumber % 2 === 0 ? sum += currentNumber : sum -= currentNumber;
    }

    console.log(sum);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])