function buildAWall(array) {

    let wallSections = array.slice(0);
    let lowestSection = Math.min(...wallSections);
    let arrLength = wallSections.length;
    let resultArray = [];
    let dailyAmoutOfConcrete = 0;
    let days = 0;

    while (lowestSection < 30) {

        dailyAmoutOfConcrete = 0;
        days++;

        for (let i = 0; i < arrLength; i++) {
            if (wallSections[i] < 30) {
                wallSections[i]++;
                dailyAmoutOfConcrete += 195;
            }
        }

        resultArray.push(dailyAmoutOfConcrete);
        lowestSection++;

    }

    let totalAmountOfConcrete = resultArray.reduce((a, b) => a + b, 0);
    console.log(resultArray.join(`, `));
    console.log(`${totalAmountOfConcrete * 1900} pesos`);
}

buildAWall([21, 25, 28])
buildAWall([17])
buildAWall([17, 22, 17, 19, 17])