function equalNeighbors(inputData) {

    let equalNeighborsCount = 0;

    for (let i = 0; i < inputData.length - 1; i++) {

        for (let k = 1; k < inputData[i].length; k++) {

            if (inputData[i][k] === inputData[i + 1][k]) {
                equalNeighborsCount++;
            }

            if (inputData[i][k] === inputData[i][k - 1]) {
                equalNeighborsCount++;
            }
        }
    }

    for (let i = 0; i < inputData[inputData.length - 1].length; i++) {

        if (inputData[inputData.length - 1][i] === inputData[inputData.length - 1][i + 1]) {
            equalNeighborsCount++;
        }
    }

    for (let i = 0; i < inputData.length - 1; i++) {

        if (inputData[i][0] === inputData[i + 1][0]) {
            equalNeighborsCount++;
        }
    }

    console.log(equalNeighborsCount)

}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']])