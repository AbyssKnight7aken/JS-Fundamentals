function serializeString(input) {

    let string = input[0];
    const charInfo = {};

    for (let index = 0; index < string.length; index++) {
        const char = string[index];
        if (!charInfo[char]) {
            charInfo[char] = { indexes: [] }
            charInfo[char].indexes.push(index);
        } else {
            charInfo[char].indexes.push(index);
        }

    }

    for (const char in charInfo) {
        console.log(`${char}:${charInfo[char].indexes.join('/')}`);
    }

}

//serializeString(["abababa"])
//serializeString(["avjavamsdmcalsdm"])
serializeString(['1'])