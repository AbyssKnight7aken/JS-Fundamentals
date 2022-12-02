function needForSpeed(input) {

    const inputData = input.slice(0);
    const numberOfCars = Number(inputData.shift());
    const cars = {};
    const maxFuelVolume = 75;
    let entry = inputData.shift();

    for (let index = 0; index < numberOfCars; index++) {
        let [car, mileage, fuel] = entry.split('|');
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
        entry = inputData.shift();
    }

    while (entry !== 'Stop') {
        let [command, car, value1, value2] = entry.split(' : ');

        switch (command) {
            case 'Drive': drive(car, value1, value2); break;
            case 'Refuel': refuel(car, value1); break;
            case 'Revert': revert(car, value1,); break;
        }

        entry = inputData.shift();
    }


    for (const car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }


    function drive(car, distance, fuel) {
        if (cars[car].fuel - Number(fuel) < 0) {
            console.log('Not enough fuel to make that ride');
        } else {
            cars[car].mileage += Number(distance);
            cars[car].fuel -= Number(fuel);
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        }

    }

    function refuel(car, fuel) {
        if (cars[car].fuel + Number(fuel) > maxFuelVolume) {
            let filledFuel = maxFuelVolume - cars[car].fuel;
            cars[car].fuel = maxFuelVolume;
            console.log(`${car} refueled with ${filledFuel} liters`);
        } else {
            cars[car].fuel += Number(fuel);
            console.log(`${car} refueled with ${Number(fuel)} liters`);
        }
    }

    function revert(car, kilometers) {
        cars[car].mileage -= Number(kilometers);
        if (cars[car].mileage < 10000) {
            cars[car].mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${Number(kilometers)} kilometers`);
        }
    }

}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'])

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'])