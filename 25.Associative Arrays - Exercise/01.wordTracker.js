function wordTracker(input) {

    let map = new Map();

    let searchedWords = input.shift().split(` `);

    for (const word of searchedWords) {
        map.set(word, 0);
    }

    input.forEach(word => {
        if (map.has(word)) {
            let value = map.get(word);
            map.set(word, value + 1);
        }
    });

    let sortedWords = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (const [word, value] of sortedWords) {
        console.log(`${word} - ${value}`);
    }

}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the',
    'And', 'finally', 'the', 'the', 'sentence'])

    // wordTracker([
    //     'is the',
    //     'first', 'sentence', 'Here']) 