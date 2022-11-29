function softUniStudents(inputData) {

    const studentsInfo = {};

    for (const entry of inputData) {

        if (!entry.includes('with email')) {

            let [courseName, capacity] = [...entry.split(': ')];

            if (!studentsInfo.hasOwnProperty(courseName)) {
                studentsInfo[courseName] = { capacity: Number(capacity), students: [] }
            } else {
                studentsInfo[courseName].capacity += Number(capacity);
            }
        }
        else if (entry.includes('with email')) {

            let userName = entry.split('[')[0];
            let creditsCount = Number(entry.split('[')[1].split(']')[0]);
            let email = entry.split('email ')[1].split(' joins')[0];
            let course = entry.split('joins ')[1];

            if (studentsInfo.hasOwnProperty(course) && studentsInfo[course].capacity > 0) {
                studentsInfo[course].students.push({ userName, creditsCount, email });
                studentsInfo[course].capacity--;
            }
        }
    }

    let sorted = Object.entries(studentsInfo).sort((a, b) => b[1].students.length - a[1].students.length);

    for (const info of sorted) {

        console.log(`${info[0]}: ${info[1].capacity} places left`);

        let sortedStudents = info[1].students.sort((a, b) => b.creditsCount - a.creditsCount);

        sortedStudents.forEach(element => {
            console.log(`--- ${element.creditsCount}: ${element.userName}, ${element.email}`);
        });

    }

}

softUniStudents([
    'JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3',
    'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'])

softUniStudents([
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'])