function printAndSum(start, end) {

    let sum = 0;
    let buffer = ``;

    for (let x = start; x <= end; x++) {
        buffer += `${x} `;
        sum += x;
    }
    console.log(buffer)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)