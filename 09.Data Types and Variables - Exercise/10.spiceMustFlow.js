function spiceMustFlow(startingYield) {

    let days = 0;
    let totalYield = 0;
    const miningCrewYield = 26;


    for (let yield = startingYield; yield >= 100; yield -= 10) {
        days++;
        totalYield += (yield - miningCrewYield);
    }

    totalYield -= miningCrewYield;
    if (totalYield < 0) { totalYield = 0; }

    console.log(days);
    console.log(totalYield);
}

spiceMustFlow(111)
spiceMustFlow(450)