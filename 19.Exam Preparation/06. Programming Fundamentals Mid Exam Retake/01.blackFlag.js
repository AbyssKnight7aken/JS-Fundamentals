function blackFlag(inputArray) {
    
    const daysAtSea = Number(inputArray[0]);
    const dailyPlunder = Number(inputArray[1]);
    const expectedPlunder = Number(inputArray[2]);
    let totalPlunder = 0;

    for (let day = 1; day <= daysAtSea; day++) {

        totalPlunder += dailyPlunder;

        if (day % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }

        if (day % 5 === 0) {
            totalPlunder *= 0.7;
        }
        
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else {
        let percentGained = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentGained.toFixed(2)}% of the plunder.`);
    }

}

blackFlag((["5","40","100"]))
blackFlag((["10","20","380"]))