function companyUsers(input) {

    let companyData = {};

    for (const line of input) {
        let [companyName, employeeID] = line.split(` -> `);
        if (!companyData.hasOwnProperty(companyName)) {
            companyData[companyName] = [];
        }
        companyData[companyName].push(employeeID);
    }

    const sorted = Object.entries(companyData).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(element => {
        const nameOfCompany = element[0];
        const allIds = element[1];
        console.log(nameOfCompany);
        let uniqueIDs = new Set(allIds);
        uniqueIDs.forEach(id => { console.log(`-- ${id}`); });
    });

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])