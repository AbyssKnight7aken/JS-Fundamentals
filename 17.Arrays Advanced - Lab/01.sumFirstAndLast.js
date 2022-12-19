function sumFirstAndLast(inputData) {

    const inputArray = inputData.slice();
    let firstElement = Number(inputArray.shift());
    let lastElement = Number(inputArray.pop());
    let result = firstElement + lastElement;
    console.log(result);
    
}

sumFirstAndLast(['20', '30', '40'])