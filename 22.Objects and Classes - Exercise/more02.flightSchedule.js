function flightSchedule(flightsInfo) {

    const flightsRegister = {};

    flightsInfo[0].forEach(index => {
        let flightId = index.split(` `)[0];
        let destination = index.split(`${flightId} `)[1];
        flightsRegister[flightId] = {
            Destination: destination,
            Status: 'Ready to fly'
        }

    });


    flightsInfo[1].forEach(index => {
        let changedFlight = index.split(` `)[0];
        let newStatus = index.split(` `)[1];
        if (flightsRegister[changedFlight]) {
            flightsRegister[changedFlight].Status = newStatus;
        }
    })

    for (const flight in flightsRegister) {
        if (flightsRegister[flight].Status === String(flightsInfo[2])) {
            console.log(flightsRegister[flight]);
        }
    }

}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']])

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
])