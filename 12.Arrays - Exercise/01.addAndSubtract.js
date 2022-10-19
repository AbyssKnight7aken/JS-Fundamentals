function addAndSubtract(originalArray) {

    let index = 0;
    let modifiedArray = [];
    let originalSum = 0;
    let modifiedSum = 0;
    let output = `[ `;

    for (index = 0; index < originalArray.length; index++) {
        if (originalArray[index] % 2 === 0) { modifiedArray[index] = originalArray[index] + index;; }
        else { modifiedArray[index] = originalArray[index] - index; }
        originalSum += originalArray[index];
        modifiedSum += modifiedArray[index];
        if (index === originalArray.length - 1) { output += `${modifiedArray[index]} ]` }
        else { output += `${modifiedArray[index]}, `; }
    }

    console.log(output);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])