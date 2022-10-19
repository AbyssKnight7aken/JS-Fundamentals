function perfectNumber(number) {

    sum = 1; // To store sum of divisors

    // Find all divisors and add them
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            if (i * i !== number) { sum = sum + i + (number / i); }
            else { sum = sum + i; }
        }
    }

    if (sum === number && number !== 1) { return `We have a perfect number!`; }
    else { return `It's not so perfect.`; }

}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)