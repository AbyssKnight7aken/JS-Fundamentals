function RightPlace(str, char, word1) {

    let word2 = str.replace(`_`, char);
    let result = word1 === word2 ? `Matched` : `Not Matched`;
    console.log(result);
    
}

RightPlace('Str_ng', 'I', 'Strong')
RightPlace('Str_ng', 'i', 'String')