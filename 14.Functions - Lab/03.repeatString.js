function repeatString(string, count) {

    let result = ``;

    while (count > 0) {
        result += string;
        count--;
    }

    return result;


}

let repeatedString = repeatString("abc", 3)
console.log(repeatedString);