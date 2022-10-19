function addAndSubtract(num1, num2, num3) {

    function add(a, b) {
        return a + b;
    }

    let sum = add(num1, num2);

    function substract(sumOfTwo, c) {
        return sumOfTwo - c;
    }

    let result = substract(sum, num3);
    return result;

}

addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)