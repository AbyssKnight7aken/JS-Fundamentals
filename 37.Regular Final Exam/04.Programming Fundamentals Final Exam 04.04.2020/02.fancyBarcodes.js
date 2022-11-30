function fancyBarcodes(input) {

    const inputData = input.slice(0);
    const barcodesCount = inputData.shift();
    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm;
    let digitPattern = /\d/g;
    let productGroup = 0;

    for (let index = 0; index < barcodesCount; index++) {

        let barcode = inputData[index];
        let match = barcode.match(pattern);

        if (match) {
            let groupMatch = barcode.match(digitPattern);
            if (groupMatch) {
                productGroup = groupMatch.join('');
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
        }

    }

}

fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
