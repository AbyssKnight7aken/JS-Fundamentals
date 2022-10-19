function reverseArrayOfNumbers(n, inputArray) {

//     let newArray = [];

//     for (let a = 0; a < n; a++) {
//         newArray.push(inputArray[a]);
//     }

//     let buffer = ``;

//     for (let x = newArray.length - 1; x >= 0; x--) {
//         buffer += `${newArray[x]} `
//     }
//     console.log(buffer);
// }

let newArray = [];

    for (let a = 0; a < n; a++) {
        newArray[n - 1 - a] = inputArray[a]
    }
    console.log(newArray.join(` `));

}    

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseArrayOfNumbers(4, [-1, 20, 99, 5])
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47])