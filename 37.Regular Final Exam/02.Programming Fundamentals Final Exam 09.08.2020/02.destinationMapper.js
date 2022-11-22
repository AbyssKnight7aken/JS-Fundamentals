function destinationMapper(text) {

    let pattern = /([=|\/]{1})(?<places>[A-Z][A-Za-z]{2,})\1/g;

    let validPlaces = text.matchAll(pattern);
    let destinations = []
    let travelPoints = 0;

    for (const match of validPlaces) {
        let currentDestination = match[2];
        travelPoints += currentDestination.length;
        destinations.push(currentDestination);
    }

    console.log(`Destinations: ${destinations.join(`, `)}`);
    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")