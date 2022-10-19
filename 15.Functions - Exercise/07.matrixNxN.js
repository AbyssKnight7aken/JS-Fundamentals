function matrixNxN(number) {

    let array = [];

    function rowGenerator() {
        let singleRow = ``;
        for (let b = 0; b < number; b++) {
            singleRow += `${number} `;
        }
        return singleRow;
    }

    for (let a = 0; a < number; a++) {
        array.push(rowGenerator());
    }

    console.log(array.join`\n`);
}

matrixNxN(3)
matrixNxN(7)