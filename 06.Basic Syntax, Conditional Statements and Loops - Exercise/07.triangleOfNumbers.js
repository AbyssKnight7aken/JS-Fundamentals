function triangleOfNumbers(n) {

    for (let s = 1; s <= n; s++) {
        let buffer = '';
        for (let x = 1; x <= s; x++) {
            buffer += `${s} `;
        }
        console.log(buffer);
    }
}

triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6)