function mirrorWords(input) {

    let text = input.shift();
    let pattern = /([@\|#]{1})(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm;
    let pairs = [];
    let resultArray = [];
    let pairsCount = 0;

    let matches = text.matchAll(pattern);

    for (const match of matches) {
        let firstWord = match.groups.firstWord;
        let secondWord = match.groups.secondWord;
        pairs.push(firstWord, secondWord);
        pairsCount++;
    }

    if (pairsCount === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairsCount} word pairs found!`);
    }

    for (let index = 0; index < pairs.length; index += 2) {
        const element = pairs[index];
        let firstWord = pairs[index];
        let secondWord = pairs[index + 1];
        if (firstWord === secondWord.split('').reverse().join('')) {
            resultArray.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    if (resultArray.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:`);
        console.log(resultArray.join(', '));
    }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])