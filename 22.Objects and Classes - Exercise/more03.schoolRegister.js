function schoolRegister(inputData) {

    let studentsRegister = {};
    let reg = [];

    for (const line of inputData) {

        let rawData = line.split(`, `);
        let name = rawData[0].split(` name: `)[1];
        let grade = Number(rawData[1].split(` `)[1]);
        let averageScore = Number(rawData[2].split(` score: `)[1]);
        if (averageScore >= 3) {
            studentsRegister = {
                Name: name,
                Grade: grade + 1,
                AverageScore: averageScore,
            }
            reg.push({studentsRegister});
        }

    }

    //studentsRegister.Grade.sort();
    console.table(studentsRegister);
    let sortedarr = reg.sort((a, b) => a.Grade - b.Grade);
    console.log(sortedarr);


}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)