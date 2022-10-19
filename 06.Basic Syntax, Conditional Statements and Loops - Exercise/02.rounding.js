function rounding(n, s) {

    if (s > 15) { s = 15; }
    console.log(parseFloat(n.toFixed(s)));

}

rounding(3.1415926535897932384626433832795, 2)
rounding(10.5, 3)