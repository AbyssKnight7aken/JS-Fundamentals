function worldTour(inputData) {

    let tour = inputData.shift();
    let entry = inputData.shift();
    let command = entry.split(`:`)[0];

    while (command !== 'Travel') {

        let value1 = entry.split(`:`)[1];
        let value2 = entry.split(`:`)[2];

        switch (command) {
            case 'Add Stop': add(value1, value2); break;
            case 'Remove Stop': remove(value1, value2); break;
            case 'Switch': change(value1, value2); break;
        }

        entry = inputData.shift();
        command = entry.split(`:`)[0];

    }

    function add(index, string) {
        if (tour[index]) {
            tour = tour.substring(0, Number(index)) + string + tour.substring(Number(index));
        }
        console.log(tour);
    }

    function remove(startIndex, endIndex) {
        if (tour[startIndex] && tour[endIndex]) {
            tour = tour.substring(0, Number(startIndex)) + tour.substring(Number(endIndex) + 1);
        }
        console.log(tour);
    }

    function change(oldString, newString) {
        if (tour.includes(oldString)) {
            tour = tour.replace(oldString, newString);
        }
        console.log(tour);
    }

    console.log(`Ready for world tour! Planned stops: ${tour}`);

}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])    