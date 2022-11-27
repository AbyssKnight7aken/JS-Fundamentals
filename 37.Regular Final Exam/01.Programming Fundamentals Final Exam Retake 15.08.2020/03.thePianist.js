function thePianist(input) {

    let inputData = input.slice(0);
    const piecesNumber = inputData.shift();
    const piecesList = {};
    let entry = inputData.shift();

    for (let index = 0; index < piecesNumber; index++) {
        let [piece, composer, key] = [...entry.split(`|`)];
        piecesList[piece] = { composer, key };
        entry = inputData.shift();
    }

    while (entry !== 'Stop') {
        let [command, piece, value1, value2] = [...entry.split(`|`)];

        switch (command) {
            case 'Add': add(piece, value1, value2); break;
            case 'Remove': remove(piece); break;
            case 'ChangeKey': changeKey(piece, value1); break;
        }

        entry = inputData.shift();
    }

    for (const piece in piecesList) {
        console.log(`${piece} -> Composer: ${piecesList[piece].composer}, Key: ${piecesList[piece].key}`);
    }


    function add(piece, composer, key) {
        if (!piecesList.hasOwnProperty(piece)) {
            piecesList[piece] = { composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function remove(piece) {
        if (piecesList.hasOwnProperty(piece)) {
            delete piecesList[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey) {
        if (piecesList.hasOwnProperty(piece)) {
            piecesList[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'])