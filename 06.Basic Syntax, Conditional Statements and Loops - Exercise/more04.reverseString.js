function reverseString(word) {

    let reverse = word.split("").reverse().join("");
    console.log(reverse);
}

reverseString(`Hello`)
reverseString(`SoftUni`)
reverseString(`1234`)