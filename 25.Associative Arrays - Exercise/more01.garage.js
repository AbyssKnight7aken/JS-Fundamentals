function garage(inputData) {

    let carsInfo = {};

    for (const line of inputData) {
        let = [garageNumber, cars] = [line.split(` - `)[0], line.split(` - `)[1]];
        if (!carsInfo.hasOwnProperty(garageNumber)) {
            carsInfo[garageNumber] = [cars];
        } else {
            carsInfo[garageNumber] = carsInfo[garageNumber].concat(cars);
        }
    }

    for (const garage in carsInfo) {
        console.log(`Garage № ${garage}:`);
        console.log(`--- ${carsInfo[garage].map(x => x.replaceAll(":", " - "))}`);
    }

}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'])