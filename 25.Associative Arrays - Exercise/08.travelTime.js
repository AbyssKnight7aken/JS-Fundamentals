function travelTime(inputData) {

    let destinations = {};

    for (let i = 0; i < inputData.length; i++) {
        let [country, town, cost] = inputData[i].split(` > `);
        destinations[i] = [country, town, Number(cost)];
        if (Number(cost) < destinations[i][1]) {
            destinations[town][1] = Number(cost);
        }
    }

    let sorted = Object.entries(destinations).sort((a, b) =>
        a[1][0].localeCompare(b[1][0]) || (a[1][2] - b[1][2]));

    for (let k = 0; k < sorted.length; k++) {
        if (k === sorted.length - 1) { break; }
        if (sorted[k][1][0] === sorted[k + 1][1][0] && sorted[k][1][1] === sorted[k + 1][1][1]) {
            sorted[k][1][2] = Math.min(sorted[k][1][2], sorted[k + 1][1][2]);
            sorted[k+1][1][2] = Math.min(sorted[k][1][2], sorted[k + 1][1][2]);
            sorted.splice(sorted.indexOf(sorted[k][1][2]) - 2, 1);
        }
    }

    let buffer = [];

    for (let i = 0; i < sorted.length; i++) {
        let [country, town, cost] = [sorted[i][1][0], sorted[i][1][1], sorted[i][1][2]];
        if (i === sorted.length - 1) {
            console.log(`${country} -> ${town} -> ${cost}`); continue;
        }
        if ((sorted[i][1][0] === sorted[i + 1][1][0])) {
            buffer.push(`${town} -> ${cost}`);
            while (sorted[i][1][0] === sorted[i + 1][1][0]) {
                i++
                [country, town, cost] = [sorted[i][1][0], sorted[i][1][1], sorted[i][1][2]];
                buffer.push(`${town} -> ${cost}`);
            }
            console.log(`${country} -> ${buffer.join(` `)}`);
            buffer = [];
        } else {
            console.log(`${country} -> ${town} -> ${cost}`);
        }
    }

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])

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