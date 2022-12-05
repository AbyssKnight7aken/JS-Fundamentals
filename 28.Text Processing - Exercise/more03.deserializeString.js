function deserializeString(input) {

    const inputData = input.slice();
    const charInfo = {};
    let entry = inputData.shift();
    let stringLenght = 0;
    let string = '';

    while (entry !== 'end') {
        let [char, indexes] = [entry.split(':')[0], entry.split(':')[1].split('/')];
        charInfo[char] = { indexes: [] };
        charInfo[char].indexes = indexes;
        stringLenght += indexes.length;
        entry = inputData.shift();
    }

    string = '*'.repeat(stringLenght);
    let arr = string.split('')

    for (const char in charInfo) {
        for (const index of charInfo[char].indexes) {
            arr[index] = char;
        }
    }

    console.log(arr.join(''));

}

// deserializeString([
//     'a:0/2/4/6',
//     'b:1/3/5',
//     'end'])

deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])