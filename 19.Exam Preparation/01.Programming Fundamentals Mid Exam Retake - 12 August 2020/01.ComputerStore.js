function ComputerStore(dataAray) {

    let index = 0;
    let command = dataAray[index];
    let sum = 0;
    let totalPrice = 0;

    while (command !== `special` && command !== `regular`) {

        let partPrice = Number(command);
        if (partPrice < 0) {
            console.log(`Invalid price!`);
            index++;
            command = dataAray[index];
            continue;
        }
        sum += partPrice
        index++;
        command = dataAray[index];
    }

    let taxes = sum * 0.2;

    if (command === `special`) {
        totalPrice = (sum + taxes) * 0.9;
    }
    else {
        totalPrice = sum + taxes;
    }

    if (totalPrice === 0) {
        console.log(`Invalid order!`);
    }
    else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}

//ComputerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
ComputerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular'])
//ComputerStore(['regular'])