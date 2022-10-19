function smallestOfThreeNumbers(num1, num2, num3) {

    // let smallestNumber = ``;

    // // if (num1 < num2 && num1 < num3) {
    // //     smallestNumber = num1;
    // // } else if (num2 < num1 && num2 < num3) {
    // //     smallestNumber = num2;
    // // } else {
    // //     smallestNumber = num3;
    // // }

    let smallestNumber = Math.min(num1, num2, num3);
    console.log(smallestNumber);

    return smallestNumber;

}

smallestOfThreeNumbers(2, 5, 3)
smallestOfThreeNumbers(600, 342, 123)
smallestOfThreeNumbers(25, 21, 4)
smallestOfThreeNumbers(2, 2, 2)