function specialNumbers(n) {

    for (let a = 1; a <= n; a++) {
        let num = String(a);
        let sum = 0;
        for (let s = 0; s < num.length; s++) {
            let digit = Number(num.charAt(s));
            sum += digit;
        }
        let isSpecial = ``;
        sum === 5 || sum === 7 || sum === 11 ? isSpecial = `True` : isSpecial = `False`;
        console.log(`${num} -> ${isSpecial}`);
    }

}

specialNumbers(15)
//specialNumbers(20)