function addAndRemove(inputArray) {

    let newArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i];
        if (command === `add`) { newArray.push(i + 1); }
        else { newArray.pop(); }
    }
    if (newArray.length === 0) { newArray.push(`Empty`); }
    console.log(newArray.join(` `));
}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])