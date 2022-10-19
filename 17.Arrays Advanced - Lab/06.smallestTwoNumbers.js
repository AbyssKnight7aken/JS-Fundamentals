function smallestTwoNumbers(arr) {

    let newArraw = arr.sort((a, b) => { return a - b });
    console.log(newArraw.slice(0, 2).join(` `));

}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])