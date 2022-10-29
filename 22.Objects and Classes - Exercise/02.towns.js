function towns(inputData) {

    const townsInfo = {};

    for (const index of inputData) {
        let [townName, latitude, longitude] = index.split(` | `);
        townsInfo.town = townName;
        townsInfo.latitude = Number(latitude).toFixed(2);
        townsInfo.longitude = Number(longitude).toFixed(2);
        console.log(townsInfo);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])

towns(['Plovdiv | 136.45 | 812.575'])