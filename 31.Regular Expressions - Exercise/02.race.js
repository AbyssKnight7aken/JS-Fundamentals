function race(inputData) {

    const names = inputData.shift().split(`, `);
    const map = new Map();
    let entry = inputData.shift();
    let namePattern = /[A-Za-z]+/g;
    let digitPattern = /\d/g;

    while (entry !== 'end of race') {
        let validName = entry.match(namePattern).join(``);
        let validDigits = entry.match(digitPattern).map(Number).reduce((a, b) => a + b, 0);
        if (names.includes(validName)) {
            if (!map.has(validName)) {
                map.set(validName, validDigits);
            } else {
                let currentNumber = map.get(validName);
                map.set(validName, currentNumber + validDigits);
            }
        }
        entry = inputData.shift();
    }

    let raceInfo = Array.from(map).sort((a, b) => b[1] - a[1]);
    raceInfo = raceInfo.filter(a => raceInfo.indexOf(a) <= 2);
    let place = ['1st', '2nd', '3rd'];
    let i = 0;
    raceInfo.forEach(element => {
        console.log(`${place[i]} place: ${element[0]}`);
        i++;
    });

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])