function distinctArray(array) {

    let uniqueNumbers = new Set(array);
    console.log([...uniqueNumbers].join(` `));

    // let resultArray = [];
    // let arrayLength = array.length;

    // for (let i = 0; i < arrayLength; i++) {

    //     if (!(resultArray.includes(array[i]))) {
    //         resultArray.push(array[i]);
    //     }
    // }

    // console.log(resultArray.join(` `));


    // for (let i = 0; i < array.length; i++) {
    //     let x = 0;
    //     for (let k = i + 1; k <= array.length; k++) {
    //         let firstEl = array[i];
    //         let secondEl = array[k - x];
    //         if (firstEl === secondEl) {
    //             array.splice(k - x, 1);
    //             x++;
    //         }
    //     }
    // }

    // return array.join(` `)
}

distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
distinctArray([20, 20, 20])