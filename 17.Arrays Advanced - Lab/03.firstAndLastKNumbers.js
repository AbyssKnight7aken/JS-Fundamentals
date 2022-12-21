function firstAndLastKNumbers(inputArray) {

    let array = inputArray.slice();
    let k = array.shift();
    firstKNumbers = array.slice(0, k);
    lasttKNumbers = array.slice(array.length - k, array.length);

    console.log(firstKNumbers.join(` `));
    console.log(lasttKNumbers.join(` `));

}

firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])