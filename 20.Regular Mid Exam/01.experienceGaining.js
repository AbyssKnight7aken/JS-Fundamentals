function experienceGaining(input) {

    let neededXP = Number(input.shift()),
        battleCount = Number(input.shift()),
        experience = 0,
        battles = 0;

    for (let i = 0; i < input.length; i++) {

        let newExperience = Number(input[i]);
        let day = i + 1;

        if (day % 3 === 0 && day % 5 !== 0) {
            newExperience += newExperience * 0.15;
        }

        if (day % 5 === 0) {
            newExperience -= newExperience * 0.1;
        }

        experience += newExperience;
        battles++;

        if (experience >= neededXP) {
            break;
        }
    }

    experience >= neededXP
        ? console.log(`Player successfully collected his needed experience for ${battles} battles.`)
        : console.log(`Player was not able to collect the needed experience, ${(neededXP - experience).toFixed(2)} more needed.`)

}

experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    30])
)

// // experienceGaining(([500,
// //     5,
// //     50,
// //     100,
// //     200,
// //     100,
// //     20])
// )

// experienceGaining(([400,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])
// )