function schoolGrades(inputData) {

    let students = new Map();

    for (const line of inputData) {
        let entry = line.split(` `);
        let [name, grades] = [entry.shift(), entry.join(` `)];
        if (students.has(name)) {
            let currentGrades = students.get(name);
            students.set(name, currentGrades + ` ` + grades);
        }
        else {
            students.set(name, grades);
        }
    }

    let sortedStudents = Array.from(students).sort((a, b) => a[0].localeCompare(b[0]));

    sortedStudents.forEach(element => {
        let [name, scores] = [element[0], element[1].split(` `).map(Number)];
        let averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        console.log(`${name}: ${averageScore.toFixed(2)}`);
    });

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])