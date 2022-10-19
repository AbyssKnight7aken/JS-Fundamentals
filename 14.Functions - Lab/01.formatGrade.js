function formatGrade(inputGrade) {

    let grade = ``;

    if (inputGrade < 3.00) { grade = `Fail`; }
    else if (inputGrade < 3.50) { grade = `Poor`; }
    else if (inputGrade < 4.50) { grade = `Good`; }
    else if (inputGrade < 5.50) { grade = `Very good`; }
    else { grade = `Excellent`; }

    if (inputGrade < 3.00) { console.log(grade + ` (2)`); }
    else { console.log(`${grade} (${inputGrade.toFixed(2)})`); }

}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)


// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"
