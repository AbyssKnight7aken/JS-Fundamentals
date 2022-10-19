function loadingBar(number) {

    let percents = `%`.repeat(number / 10);
    let dots = `.`.repeat(10 - percents.length);

    if (number === 100) {
        console.log(`100% Complete!`);
        console.log(percents);
    } else {
        console.log(`${number}% [${percents}${dots}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(30)
loadingBar(50)
loadingBar(100)