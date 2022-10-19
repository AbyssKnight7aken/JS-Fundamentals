function signCheck(a, b, c) {

    let check2 = (a, b) => a * b;
    let check3 = (c) => check2(a, b) * c;

    if (check3(c) > 0) { return `Positive`; }
    else { return `Negative`; }
    
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1)