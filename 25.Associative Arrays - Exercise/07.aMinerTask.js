function aMinerTask(input) {

    const map = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!map.has(resource)) {
            map.set(resource, 0);
        }

        map.set(resource, map.get(resource) + quantity);
    }

    let arr = Array.from(map);

    arr.forEach(el => { console.log(`${el[0]} -> ${el[1]}`); });

}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])