function meetings(input) {

    let meetingsRegister = {};

    for (const line of input) {
        let [day, name] = line.split(` `);
        if (meetingsRegister.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingsRegister[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in meetingsRegister) {
        console.log(`${day} -> ${meetingsRegister[day]}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])