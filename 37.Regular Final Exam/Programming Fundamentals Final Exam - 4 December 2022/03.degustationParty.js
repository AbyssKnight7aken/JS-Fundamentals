function degustationParty(input) {

    const inputData = input.slice();
    const guests = {};
    let dislikeCounter = 0;
    let entry = inputData.shift();

    while (entry !== 'Stop') {
        let [command, GuestName, CurrentMeal] = entry.split('-');

        switch (command) {
            case 'Like': like(GuestName, CurrentMeal); break;
            case 'Dislike': dislike(GuestName, CurrentMeal); break;
        }

        entry = inputData.shift();
    }


    function like(name, meal) {
        if (!guests[name]) {
            guests[name] = { meals: [] };
            guests[name].meals.push(meal);
        } else if (!guests[name].meals.includes(meal)) {
            guests[name].meals.push(meal);
        }
    }

    function dislike(name, meal) {
        if (guests[name] && guests[name].meals.includes(meal)) {
            let index = guests[name].meals.indexOf(meal);
            guests[name].meals.splice(index, 1);
            dislikeCounter++;
            console.log(`${name} doesn't like the ${meal}.`);

        } else if (!guests[name]) {
            console.log(`${name} is not at the party.`);
        }

        else if (!guests[name].meals.includes(meal)) {
            console.log(`${name} doesn't have the ${meal} in his/her collection.`);
        }

    }

    for (const name in guests) {
        console.log(`${name}: ${guests[name].meals.join(', ')}`);
    }

    console.log(`Unliked meals: ${dislikeCounter}`);

}

degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])


// degustationParty(["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"])


// degustationParty(["Like-Katy-fish",
//     "Dislike-Katy-fish",
//     "Stop"])