function armies(inputData) {

    const armiesInfo = {};
    let general = ``;
    let army = ``;
    let armyNumber = 0;

    for (const entry of inputData) {

        if (entry.includes(`arrives`)) {
            general = entry.split(` arrives`)[0];
            armiesInfo[general] = { armyCount: 0 };
        }
        else if (entry.includes(`defeated`)) {
            general = entry.split(` defeated`)[0];
            if (armiesInfo.hasOwnProperty(general)) {
                delete armiesInfo[general];
            }
        }
        else if (entry.includes(`+`)) {
            army = entry.split(` + `)[0];
            armyNumber = Number(entry.split(` + `)[1]);
            for (const general in armiesInfo) {
                if (armiesInfo[general].hasOwnProperty(army)) {
                    armiesInfo[general][army] += armyNumber;
                    armiesInfo[general].armyCount += armyNumber;
                }
            }

        }
        else {
            let line = entry.replace(`:`, `,`);
            general = line.split(`, `)[0];
            army = line.split(`, `)[1];
            armyNumber = Number(line.split(`, `)[2]);
            if (armiesInfo.hasOwnProperty(general)) {
                armiesInfo[general][army] = armyNumber;
                armiesInfo[general].armyCount += armyNumber;
            }

        }

    }

    let sorted = Object.entries(armiesInfo).sort((a, b) => b[1].armyCount - a[1].armyCount);

    for (const general of sorted) {
        console.log(`${general[0]}: ${general[1].armyCount}`);
        let arr = Object.entries(general[1]).sort((a, b) => b[1] - a[1]);
        for (const el of arr) {
            if (el[0] !== `armyCount`) {
                console.log(`>>> ${el[0]} - ${el[1]}`);
            }    
        }
    }

}

armies([
    'Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205'])

armies([
    'Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500',
    'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340',
    'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])