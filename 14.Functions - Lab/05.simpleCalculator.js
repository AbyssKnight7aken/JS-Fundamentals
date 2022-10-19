function simpleCalculator(a, b, operator) {

    switch (operator) {
        case `multiply`: return a * b;
        case `divide`: return a / b;
        case `add`: return a + b;
        case `subtract`: return a - b;
    }

}

let result = simpleCalculator(5, 5, 'multiply');
console.log(result);
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')