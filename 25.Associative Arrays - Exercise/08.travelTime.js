function travelTime(inputData) {

    let input = inputData.slice(0);
    const destinations = {};
    let entry = input.shift();

    while (entry) {

        let [country, town, cost] = entry.split(` > `);

        if (!destinations[country]) {
            destinations[country] = {};
        }

        if (!destinations[country][town]) {
            destinations[country][town] = Number(cost);
        }

        let storedCost = destinations[country][town];

        if (storedCost > Number(cost)) {
            destinations[country][town] = Number(cost);
        }
        entry = input.shift();
    }

    let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
    let result = ''

    for (const element of sorted) {
        let country = element[0];
        result += country + " -> ";
        //console.log(element[0]); //country
        //console.log(Object.keys(element[1])); //town
        //console.log(Object.values(element[1])); //cost
        let sortedTowns = Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]);
        sortedTowns.forEach(el => {
            let town = el[0];
            let cost = el[1];
            result += `${town} -> ${cost} `;
        });
        result += "\n";
    }

    console.log(result);

}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"])

// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'])

travelTime([
    `Bulgaria > Sofia > 25000`,
    `aaa > Sofia > 1`,
    `aa > Orgrimar > 0`,
    `Albania > Tirana > 25000`,
    `zz > Aarna > 25010`,
    `Bulgaria > Lukovit > 10`])

// aa -> Orgrimar -> 0
// aaa -> Sofia -> 1
// Albania -> Tirana -> 25000
// Bulgaria -> Lukovit -> 10 Sofia -> 25000
// zz -> Aarna -> 25010