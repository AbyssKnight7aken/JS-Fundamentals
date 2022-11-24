function pirates(inputData) {

    let cities = {};
    let entry = inputData.shift();

    while (entry !== 'Sail') {
        let [town, population, gold] = [...entry.split('||')];
        if (!cities[town]) {
            cities[town] = { population: Number(population), gold: Number(gold) };
        } else {
            cities[town].population += Number(population);
            cities[town].gold += Number(gold);
        }
        entry = inputData.shift();
    }

    entry = inputData.shift();

    while (entry !== 'End') {
        let [command, targetTown, value1, value2] = [...entry.split('=>')];

        switch (command) {
            case 'Plunder': plunder(targetTown, value1, value2); break;
            case 'Prosper': prosper(targetTown, value1); break;
        }
        entry = inputData.shift();
    }

    if (Object.keys(cities).length > 0) {

        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);

        for (const key in cities) {
            console.log(`${key} -> Population: ${cities[key].population} citizens, Gold: ${cities[key].gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }


    function plunder(townName, victims, goldValue) {
        cities[townName].population -= Number(victims);
        cities[townName].gold -= Number(goldValue);
        console.log(`${townName} plundered! ${goldValue} gold stolen, ${victims} citizens killed.`);
        if (cities[townName].population <= 0 || cities[townName].gold <= 0) {
            delete cities[townName];
            console.log(`${townName} has been wiped off the map!`);
        }
    }

    function prosper(townName, goldValue) {
        if (Number(goldValue) < 0) {
            return console.log(`Gold added cannot be a negative number!`);
        }
        cities[townName].gold += Number(goldValue);
        console.log(`${goldValue} gold added to the city treasury. ${townName} now has ${cities[townName].gold} gold.`);
    }

}

// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])

// pirates([
//     "Nassau||95000||1000",
//     "San Juan||930000||1250",
//     "Campeche||270000||690",
//     "Port Royal||320000||1000",
//     "Port Royal||100000||2000",
//     "Sail",
//     "Prosper=>Port Royal=>-200",
//     "Plunder=>Nassau=>94000=>750",
//     "Plunder=>Nassau=>1000=>150",
//     "Plunder=>Campeche=>150000=>690",
//     "End"])

pirates([
    "Tortuga||345000||1250",
    "Sail",
    "Plunder=>Tortuga=>750000=>380",
    "End"])