function sorting(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let newArray = [];

    while (array.length !== 0) {

        let lastElement = sortedArray.pop();
        let firstElement = sortedArray.shift()
        newArray.push(lastElement);
        newArray.push(firstElement);
    }

    console.log(newArray.join(` `));

    // array.sort((a,b) => b - a);
    // for (let i = 1; i < array.length; i +=2) {
    //     let smallestNumber = array.pop();
    //     array.splice(i,0,smallestNumber);
    // }
    // console.log(array.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])