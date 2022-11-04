function wordOccurrences(inputData) {

    let map = new Map();

    for (const word of inputData) {
        if (map.has(word)) {
            let counter = map.get(word);
            map.set(word, counter + 1);
        } else {
            map.set(word, 1);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])

wordOccurrences(["dog", "bye", "city",
    "dog", "dad", "boys", "ginger"])