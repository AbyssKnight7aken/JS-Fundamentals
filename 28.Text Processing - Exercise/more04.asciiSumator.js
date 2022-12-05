function asciiSumator(input) {

    const inputData = input.slice();
    const firstChar = inputData.shift();
    const lastChar = inputData.shift();
    let string = inputData.shift();
    let startValue = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
    let endValue = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());
    let sum = 0;

    for (let index = 0; index < string.length; index++) {
        const charNum = string[index].charCodeAt();
        if (charNum > startValue && charNum < endValue) {
            sum += charNum;
        }
    }

    console.log(sum);

}

asciiSumator([
    '.',
    '@',
    'dsg12gr5653feee5'])

asciiSumator([
    '?',
    'E',
    '@ABCEF'])

asciiSumator([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'])