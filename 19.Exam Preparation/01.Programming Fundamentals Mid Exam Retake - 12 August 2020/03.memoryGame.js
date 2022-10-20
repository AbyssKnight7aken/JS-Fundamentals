function memoryGame(inputData) {

    let elements = inputData.shift().split(` `);
    let index = 0;
    let command = inputData[index];

    while (command !== `end`) {

        index++;
        let numberIndexes = command.split(` `).map(Number);
        let firstIndex = Number(numberIndexes[0]);
        let secondIndex = Number(numberIndexes[1]);

        //anti cheat:
        if (firstIndex === secondIndex || !elements[firstIndex] || !elements[secondIndex]) {
            elements.splice((Math.ceil(elements.length / 2)), 0, `-${index}a`, `-${index}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
            command = inputData[index];
            continue;
        }

        //matching elements:
        if (elements[firstIndex] === elements[secondIndex]) {
            let foundedElement = elements[firstIndex];
            elements = elements.filter(x => x !== elements[firstIndex]);
            console.log(`Congrats! You have found matching elements - ${foundedElement}!`);
        }
        else {
            console.log(`Try again!`);
        }

        //won game:
        if (elements.length <= 0) {
            console.log(`You have won in ${index} turns!`);
            break;
        }

        command = inputData[index];
    }

    //lose game
    if (elements.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(elements.join(` `));
    }

}

//memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"])
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"])
//memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"])