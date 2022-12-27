function steamAccount(InputArray) {

    const array = InputArray.slice();
    let gamesLibrary = array.shift().split(` `);
    let index = 0;
    let operation = array[index].split(` `);
    let command = operation[0];
    let game = operation[1];

    while (command !== `Play!`) {

        switch (command) {
            case `Install`:
                install(game); break;
            case `Uninstall`:
                uninstall(game); break;
            case `Update`:
                update(game); break;
            case `Expansion`:
                expansion(game); break;
        }

        index++;
        operation = array[index].split(` `);
        command = operation[0];
        game = operation[1];

    }

    function install(newGame) {
        if (!(gamesLibrary.includes(newGame))) {
            gamesLibrary.push(newGame);
        }
    }

    function uninstall(newGame) {
        if (gamesLibrary.includes(newGame)) {
            let i = gamesLibrary.indexOf(newGame);
            gamesLibrary.splice(i, 1);
        }
    }

    function update(newGame) {
        if (gamesLibrary.includes(newGame)) {
            let i = gamesLibrary.indexOf(newGame);
            gamesLibrary.splice(i, 1);
            gamesLibrary.push(newGame);
        }
    }

    function expansion(newGame) {
        let g = newGame.split(`-`);
        let gameName = g[0];
        let expansionName = g[1];
        if (gamesLibrary.includes(gameName)) {
            let i = gamesLibrary.indexOf(gameName);
            gamesLibrary.splice(i + 1, 0, `${gameName}:${expansionName}`);
        }
    }

    console.log(gamesLibrary.join(` `));

}

steamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
steamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!'])