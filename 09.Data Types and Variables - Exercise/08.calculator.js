function calculator(a, operator, b) {

    let result = eval(`${a}${operator}${b}`);
    console.log(result.toFixed(2));

}

calculator(5, '+', 10)
calculator(25.5, '-', 3)