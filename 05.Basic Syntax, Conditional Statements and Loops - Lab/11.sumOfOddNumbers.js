function sumOfOddNumbers(n) {

    let oddNumbers = 0;
    let sum = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) { console.log(i); oddNumbers++; sum += i; }
        if (oddNumbers === n) {console.log(`Sum: ${sum}`); break; }
    }
}

// sumOfOddNumbers(5)
sumOfOddNumbers(3)