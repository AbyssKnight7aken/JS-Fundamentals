function rageQuit(inputString) {

    let text = inputString.toString();
    let pattern = /(\D+)(\d)/g;
    let match = pattern.exec(text);
    let rageQuit = '';

    while (match) {
        let count = Number(match[2]);
        let string = match[1].toUpperCase();
        rageQuit += string.repeat(count);

        match = pattern.exec(text);
    }

    let str = text.split('');
    str = str.map(a => a.toUpperCase()).filter(a => isNaN(a));
    //console.log(str);
    let uniqueSymbols = new Set(str);

    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(rageQuit);

}

//rageQuit('a3')
rageQuit('aSd2&5s@1')
//rageQuit("e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15")