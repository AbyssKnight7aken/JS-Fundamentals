function softUniReception(array) {

    let studentsCount = Number(array.pop());
    let efficiencyPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let time = 0;
    let breakCounter = 0;

    for (let i = 0; studentsCount > 0; i++) {

        time++;
        breakCounter++;
        if (breakCounter === 4) {
            breakCounter = 0;
            continue;
        }
        studentsCount -= efficiencyPerHour;

    }
    console.log(`Time needed: ${time}h.`);

}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3', '2', '5', '40'])