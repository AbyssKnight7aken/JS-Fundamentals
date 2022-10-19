function dayOfWeek(day) {

    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    day >= 1 && day <= 7 ? console.log(daysOfWeek[day - 1]) : console.log(`Invalid day!`);

}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)