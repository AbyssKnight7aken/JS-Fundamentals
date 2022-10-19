function ladybugs(array) {

    let fieldSize = Number(array.shift());
    //console.log(array);
    bugsPosition = array.shift().split(` `).map(Number);
    //console.log(bugsPosition);
    let field = [];
    let x = 0;

    for (let i = 0; i < fieldSize; i++) {
        field.push(0);
        if (bugsPosition[x] === i) {
            field[i] = 1;
            x++;
        }
    }

    //console.log(field.join(` `));
    //console.log(array);

    for (let index = 0; index < array.length; index++) {
        let command = array[index].split(` `);
        let ladyBugIndex = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);

        if (field[ladyBugIndex] !== 1 || ladyBugIndex < 0 || ladyBugIndex >= field.length) { continue; }

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);
            if (direction === `right`) { direction = `left` }
            else if (direction === `left`) { direction = `right` }
        }

        switch (direction) {
            case `left`:
                if (ladyBugIndex - flyLength < 0) {
                    field[ladyBugIndex] = 0;
                }
                else {
                    for (let a = ladyBugIndex - flyLength; a >= 0; a -= flyLength) {
                        if (field[a] === 0) { field[a] = 1; field[ladyBugIndex] = 0; break; }
                        //else { continue; }
                    }
                    if (field[ladyBugIndex] === 1) { field[ladyBugIndex] = 0; }
                }
                break;
            case `right`:
                if (ladyBugIndex + flyLength >= field.length) {
                    field[ladyBugIndex] = 0;
                }
                else {
                    for (let b = ladyBugIndex + flyLength; b < field.length; b += flyLength) {
                        if (field[b] === 0) { field[b] = 1; field[ladyBugIndex] = 0; break; }
                        //else { continue; }
                    }
                    if (field[ladyBugIndex] === 1) { field[ladyBugIndex] = 0; }
                }
                break;
        }
    }

    console.log(field.join(` `));

}

//ladybugs([3, '0 1', '0 right 1', '2 right 1'])
//ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
ladybugs([5, '3', '3 left 2', '1 left -2'])