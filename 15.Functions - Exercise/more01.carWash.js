function carWash(dataArray) {

    let cleanPercent = 0;
    arrLength = dataArray.length;

    for (let i = 0; i < arrLength; i++) {
        let currentData = dataArray[i];

        switch (currentData) {
            case `soap`: cleanPercent += 10; break;
            case `water`: cleanPercent += (cleanPercent * 0.2); break;
            case `vacuum cleaner`: cleanPercent += (cleanPercent * 0.25); break;
            case `mud`: cleanPercent -= (cleanPercent * 0.1); break;
        }
    }

    return `The car is ${cleanPercent.toFixed(2)}% clean.`;

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])