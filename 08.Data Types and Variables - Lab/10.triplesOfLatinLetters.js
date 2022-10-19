function triplesOfLatinLetters(n) {

    for (let a = 0; a < n; a++) {
        for (let b = 0; b < n; b++) {
            for (let c = 0; c < n; c++) {
                let letter1 = String.fromCharCode(97 + a);
                let letter2 = String.fromCharCode(97 + b);
                let letter3 = String.fromCharCode(97 + c);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

//triplesOfLatinLetters(3)
triplesOfLatinLetters(2)