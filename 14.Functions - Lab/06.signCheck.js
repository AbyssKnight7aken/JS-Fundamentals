function signCheck(a, b, c) {

    let check2 = (a, b) => a * b;
    let check3 = (c) => check2(a, b) * c;

    if (check3(c) > 0) { return `Positive`; }
    else { return `Negative`; }

}

signCheck(5, 12, -15)