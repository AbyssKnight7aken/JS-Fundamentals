function convertToObject(inputData) {

    let personInfo = JSON.parse(inputData);

    Object.keys(personInfo).forEach(key => {
        console.log(`${key}: ${personInfo[key]}`);
    });

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')