function emojiDetector(inputString) {

    let text = inputString.shift();

    let emojiPattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g;

    let coolThreshold = text.match(digitPattern).map(Number).reduce((a, b) => a * b, 1);
    let validEmojies = text.match(emojiPattern);

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojies.length} emojis found in the text. The cool ones are:`);

    for (let i = 0; i < validEmojies.length; i++) {

        let currentEmoji = validEmojies[i];
        let currentSum = 0;

        for (let char of currentEmoji) {

            const isCapLetter = char.charCodeAt() >= 65 && char.charCodeAt() <= 90;
            const isSmallLetter = char.charCodeAt() >= 97 && char.charCodeAt() <= 122;

            if (isCapLetter || isSmallLetter) {
                currentSum += char.charCodeAt();
            }
        }

        if (currentSum > coolThreshold) {
            console.log(currentEmoji);
        }
    }

}

// emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])