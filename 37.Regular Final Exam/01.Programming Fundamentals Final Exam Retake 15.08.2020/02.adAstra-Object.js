function adAstra(input) {

    let text = input.shift();
    let pattern = /([#\||]{1})(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d]+)\1/gm;
    const foodInfo = {}
    let totalCalories = 0;
    const caloriesPerDay = 2000;

    let match = pattern.exec(text);
    console.log(match);

    while (match) {
        let foodName = match.groups.name;
        let calories = Number(match.groups.calories);
        let expirationDate = match.groups.date;

        foodInfo[foodName] = { expDate: expirationDate, energy: calories };
        totalCalories += calories;

        match = pattern.exec(text);
    }

    const result = Object.entries(foodInfo);
    const days = Math.trunc(totalCalories / caloriesPerDay);

    console.log(`You have food to last you for: ${days} days!`);

    result.forEach(element => {
        console.log(`Item: ${element[0]}, Best before: ${element[1].expDate}, Nutrition: ${element[1].energy}`);
    });

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
//adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
//adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])