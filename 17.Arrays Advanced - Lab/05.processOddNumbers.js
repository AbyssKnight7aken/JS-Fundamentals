function processOddNumbers(array) {

    let newArray = array.filter((x, i) => i % 2 !== 0).map(x => x * 2).reverse().join(` `);
    console.log(newArray);
    
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])