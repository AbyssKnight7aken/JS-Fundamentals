function plantDiscovery(inputData) {

    const plantsCount = inputData.shift();
    const plantsData = {};

    for (let i = 0; i < plantsCount; i++) {
        let [plantName, rarity] = [inputData[0].split(`<->`)[0], inputData[0].split(`<->`)[1]];
        plantsData[plantName] = { rarity: Number(rarity), ratings: [] };
        inputData.shift();
    }

    let entry = inputData.shift();

    while (entry !== 'Exhibition') {

        let command = entry.split(`: `)[0];
        let name = entry.split(`: `)[1].split(` - `)[0];
        let value = Number(entry.split(` - `)[1]);

        switch (command) {
            case 'Rate': rate(name, value); break;
            case 'Update': update(name, value); break;
            case 'Reset': reset(name); break;
        }

        entry = inputData.shift();

    }

    let resultInfo = Object.entries(plantsData);

    console.log(`Plants for the exhibition:`);

    for (const line of resultInfo) {
        let averageRating = line[1].ratings.reduce((a, b) => a + b, 0) / line[1].ratings.length;
        if (line[1].ratings.length === 0) {averageRating = 0;}
        console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function rate(plant, newRating) {
        if (plantsData[plant]) {
            plantsData[plant].ratings.push(newRating);
        } else {
            console.log('error');
        }
    }

    function update(plant, newRarity) {
        if (plantsData[plant]) {
            plantsData[plant].rarity = newRarity;
        } else {
            console.log('error');
        }
    }

    function reset(plant) {
        if (plantsData[plant]) {
            plantsData[plant].ratings = [];
        } else {
            console.log('error');
        }
    }

}

// plantDiscovery([
//     "3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"])

// plantDiscovery([
//     "2",
//     "Candelabra<->10",
//     "Oahu<->10",
//     "Rate: Oahu - 7",
//     "Rate: Candelabra - 6",
//     "Exhibition"])

    plantDiscovery([
        "2",
        "Candelabra<->10",
        "Oahu<->10",
        "Rate: Rose - 7",
        "Rate: Candelabra - 6",
        "Exhibition"])
