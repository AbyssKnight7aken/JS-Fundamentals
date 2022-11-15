function countStringOccurrences(string, seachedWord) {

    const words = string.split(' ');
    let counter = 0;

    words.forEach(word => {
        if (word === seachedWord) {
            counter++;
        }
    });

    console.log(counter);

}

countStringOccurrences('This is a word and it also is a sentence', 'is')
countStringOccurrences('softuni is great place for learning new programming languages', 'softuni')