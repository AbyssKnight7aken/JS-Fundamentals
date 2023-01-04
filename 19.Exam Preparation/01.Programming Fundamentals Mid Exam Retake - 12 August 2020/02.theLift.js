function theLift(inputData) {

    const inputArray = inputData.slice();
    const wagonCapacity = 4;
    let peopleWaiting = Number(inputArray.shift());
    let wagons = inputArray[0].split(` `).map(Number);

    for (let i = 0; i < wagons.length; i++) {
        if (peopleWaiting <= 0) { break; }
        let currentWagon = Number(wagons[i]);
        if (currentWagon < wagonCapacity) {
            peopleWaiting -= wagonCapacity - currentWagon;
            if (peopleWaiting < 0) {
                wagons[i] = wagonCapacity + peopleWaiting;
                peopleWaiting = 0;
            }
            else {
                wagons[i] = wagonCapacity;
            }
        }
    }

    let availability = wagons.filter(x => x < 4).reduce((a, b) => a + b, 0);

    if (peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(wagons.join(` `));
    }

    if (availability > 0) {
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(` `));
    }

    if (peopleWaiting <= 0 && availability <= 0) {
        console.log(wagons.join(` `));
    }

}

//theLift(["15", "0 0 0 0 0"])
//theLift(["20", "0 2 0"])
theLift(["4", "4 0 4"])