function palindromeIntegers(numbersArray) {

    let isPalindrome = true;
    let arrayLength = numbersArray.length;

    for (let i = 0; i < arrayLength; i++) {
        let numberAsString = numbersArray[i].toString();
        let reversedString = numberAsString.split(``).reverse().join(``);

        numberAsString === reversedString ?
            isPalindrome = true :
            isPalindrome = false;
        console.log(isPalindrome);
    }

}

palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])