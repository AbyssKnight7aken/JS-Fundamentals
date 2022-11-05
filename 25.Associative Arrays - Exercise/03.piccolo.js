function piccolo(input) {

    const carsIN = new Set();

    for (const line of input) {
        let [direction, carNumber] = line.split(`, `);
        if (direction === `IN`) { carsIN.add(carNumber); }
        if (direction === `OUT`) { carsIN.delete(carNumber); }
    }

    let sorted = Array.from(carsIN).sort((a, b) => a.localeCompare(b));

    if (sorted.length === 0) { console.log(`Parking Lot is Empty`); }
    else { sorted.forEach(number => { console.log(number); }); }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])