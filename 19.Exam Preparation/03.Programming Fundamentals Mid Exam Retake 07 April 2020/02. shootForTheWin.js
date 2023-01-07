function shootForTheWin(input) {

    const inputArray = input.slice();
    let targets = inputArray.shift().split(" ").map(Number);
    let targetShot = 0;
    let index = 0;
    let command = inputArray[index];
    index++;

    while (command !== "End") {

        let targetIndex = Number(command);

        if (targetIndex >= 0 && targetIndex < targets.length) {

            for (let i = 0; i < targets.length; i++) {

                let targetNumber = Number(targets[targetIndex]);

                if (targets[i] !== -1 && i !== targetIndex) {
                    if (targets[i] > targetNumber) {
                        targets[i] -= targetNumber;
                    }
                    else {
                        targets[i] += targetNumber;
                    }
                }
            }

            targets[targetIndex] = -1;
            targetShot++;
        }
        command = inputArray[index];
        index++
    }

    console.log(`Shot targets: ${targetShot} -> ${targets.join(" ")}`);

}


shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])


shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

