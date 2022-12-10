function easterEggs(input) {

    const inputData = input.slice();
    let text = inputData.shift();

    let pattern = /[@{1,}|#{1,}]([a-z]{3,})[@{1,}|#{1,}]\W*\/([0-9]+)\//g;
    let match = pattern.exec(text);

    while (match) {
        console.log(`You found ${match[2]} ${match[1]} eggs!`);
        match = pattern.exec(text);
    }

}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])