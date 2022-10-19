function nextDay(year, month, day) {

    let date1 = new Date(year, month - 1, day + 1);
    let str = date1.toString();
    let newDate = new Date(str);
    console.log(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);

}

nextDay(2016, 9, 30)
nextDay(2020, 3, 24)