function negativeOrPositiveNumbers(array) {

    let newArray = [];
    let arrL = array.length;

    for(let i = 0; i < arrL; i ++) {
        let currentElement = array[i];
        if(currentElement < 0) {
            newArray.unshift(currentElement);
        } else {
            newArray.push(currentElement);
        }
    }

    console.log(newArray.join(`\n`));
    
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])