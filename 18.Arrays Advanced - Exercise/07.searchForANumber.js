function searchForANumber(numbersArray, commandsArray) {

    let shiftRange = Number(commandsArray[0]);
    let deleteRange = Number(commandsArray[1]);
    let searchedNumber = Number(commandsArray[2]);
    let newArray = numbersArray.slice(0, shiftRange);
    newArray.splice(0, deleteRange);
    let counter = 0

    for (let i = 0; i < newArray.length; i++) {
        if (Number(newArray[i]) === searchedNumber) {
            counter++
        }
    }

    console.log(`Number ${searchedNumber} occurs ${counter} times.`);

}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])