function pascalCaseSplitter(string) {

    let word = string[0];
    const resultArray = [];

    for (let index = 1; index < string.length; index++) {
        const char = string[index];
        const isCapLetter = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
        if (!isCapLetter) {
            word += char;
        }
        else {
            resultArray.push(word);
            word = char;
        }
        if (index === string.length - 1) {
            resultArray.push(word);
        }
    }

    console.log(resultArray.join(`, `));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')