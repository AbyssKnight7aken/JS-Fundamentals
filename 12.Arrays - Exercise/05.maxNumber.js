function maxNumber(array) {

    let buffer = ``;
    
    let arrayLength = array.length;

    for (let k = 0; k < arrayLength; k++) {
        let isBigger = true;
        for (let x = k + 1; x < arrayLength; x++) {
            if (array[k] <= array[x]) { isBigger = false; }
        }
        if (isBigger) { buffer += `${array[k]} `; }
    }

    console.log(buffer);
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])