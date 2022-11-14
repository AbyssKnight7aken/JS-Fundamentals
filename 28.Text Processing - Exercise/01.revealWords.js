function revealWords(words, string) {

    const wordsArr = words.split(`, `)
    const stringArr = string.split(` `);

    for (const word of stringArr) {

        if (word.startsWith('*') && word.endsWith('*')) {
            for (const element of wordsArr) {
                if (element.length === word.length) {
                    stringArr.splice(stringArr.indexOf(word), 1, element);
                }
            }
        }
    }

    console.log(stringArr.join(` `));

}

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages')
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages')