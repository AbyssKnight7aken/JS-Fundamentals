function sortNumbers(a, b, c) {

    if (a >= b && a >= c && b >= c) { console.log(a); console.log(b); console.log(c); }
    else if (a >= b && a >= c && c >= b) { console.log(a); console.log(c); console.log(b); }
    else if (b >= a && b >= c && a >= c) { console.log(b); console.log(a); console.log(c); }
    else if (b >= a && b >= c && c >= a) { console.log(b); console.log(c); console.log(a); }
    else if (c >= a && c >= b && a >= b) { console.log(c); console.log(a); console.log(b); }

}

sortNumbers(2, 1, 3)
sortNumbers(-2, 1, 3)
sortNumbers(0, 0, 2)