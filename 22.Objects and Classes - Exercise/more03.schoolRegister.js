function schoolRegister(inputData) {

    let studentsRegister = {};

    for (const line of inputData) {

        let rawData = line.split(`, `);
        let name = rawData[0].split(` name: `)[1];
        let grade = Number(rawData[1].split(` `)[1]);
        let averageScore = Number(rawData[2].split(` score: `)[1]);
        if (averageScore >= 3) {
            studentsRegister[name] = {
                Name: name,
                Grade: grade + 1,
                AverageScore: averageScore,
            }
        }
    }

    

    let reg = Object.entries(studentsRegister);
    if (reg.length === 0) {return;}
    reg.sort((a, b) => a[1].Grade - b[1].Grade);

    let nameBuffer = [];
    let annualScore = 0;
    let startGrade = reg[0][1].Grade;
    let endGrade = reg[reg.length - 1][1].Grade;

    for (let currentGrade = startGrade; currentGrade <= endGrade; currentGrade++) {

        let filteredReg = reg.filter(a => a[1].Grade === currentGrade);
        let regLenght = filteredReg.length;

        if (regLenght === 0) { continue; }

        for (let i = 0; i < regLenght; i++) {
            nameBuffer.push(filteredReg[i][0]);
            annualScore += filteredReg[i][1].AverageScore;
        }

        console.log(`${currentGrade} Grade`);
        console.log(`List of students: ${nameBuffer.join(`, `)}`);
        console.log(`Average annual score from last year: ${(annualScore / regLenght).toFixed(2)}`);
        console.log();

        nameBuffer = [];
        annualScore = 0;
    }

}

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])

// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'])    

    schoolRegister([
        'Student name: George, Grade: 5, Graduated with an average score: 2.75',
        'Student name: Alex, Grade: 9, Graduated with an average score: 2.66',
        'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
        'Student name: Boby, Grade: 5, Graduated with an average score: 2.20',
        'Student name: John, Grade: 9, Graduated with an average score: 2.90',
        'Student name: Steven, Grade: 2, Graduated with an average score: 2.90',
        'Student name: Darsy, Grade: 1, Graduated with an average score: 2.15']) 