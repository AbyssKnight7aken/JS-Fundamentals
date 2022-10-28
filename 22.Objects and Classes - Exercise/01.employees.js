function employees(inputData) {

    let employeeList = {};

    inputData.forEach(person => {
        employeeList[person] = person.length;
        console.log(`Name: ${person} -- Personal Number: ${person.length}`);

    });

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])