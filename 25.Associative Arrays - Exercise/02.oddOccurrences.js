function oddOccurrences(input) {

    const words = new Map();
    let stringOfWords = input.split(` `).map(w => w.toLowerCase());

    for (const word of stringOfWords) {
        if (!words.has(word)) { words.set(word, 0); }
        let value = words.get(word);
        words.set(word, value + 1);
    }

    let resultArray = Array.from(words).filter(a => a[1] % 2 !== 0);
    let output = [];

    resultArray.forEach(kvp => { output.push(kvp[0]); });

    console.log(output.join(` `));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')