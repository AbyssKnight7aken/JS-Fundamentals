function travelTime(inputData) {

    let destinations = {};

    for (const entry of inputData) {
        let [country, town, cost] = entry.split(` > `);
        if (!destinations.hasOwnProperty(town)) {
            destinations[town] = [country, Number(cost)];
        }
        if (destinations.hasOwnProperty(town)) {
            if (Number(cost) < destinations[town][1]) {
                destinations[town][1] = Number(cost);
            }
        }
    }

    let sorted = Object.entries(destinations).sort((a, b) =>
        a[1][0].localeCompare(b[1][0]) || (a[1][1] - b[1][1]));
    //console.table(sorted);

    let buffer = [];

    for (let i = 0; i < sorted.length; i++) {
        let [town, country, cost] = [sorted[i][0], sorted[i][1][0], sorted[i][1][1]];
        if (i === sorted.length - 1) {
            console.log(`${country} -> ${town} -> ${cost}`); continue;
        }
        if ((sorted[i][1][0] === sorted[i + 1][1][0])) {
            buffer.push(`${town} -> ${cost}`);
            while (sorted[i][1][0] === sorted[i + 1][1][0]) {
                i++
                [town, country, cost] = [sorted[i][0], sorted[i][1][0], sorted[i][1][1]];
                buffer.push(`${town} -> ${cost}`);
            }
            console.log(`${country} -> ${buffer.join(` `)}`);
            buffer = [];
        } else {
            console.log(`${country} -> ${town} -> ${cost}`);
        }
    }

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