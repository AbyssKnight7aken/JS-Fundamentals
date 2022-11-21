function softUniBarIncome(inputData) {

    let entry = inputData.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|&%.]*<(?<product>\w+)>[^|&%.]*\|(?<count>\d+)\|[^\d|&%.]*(?<price>[0-9|\.]+)\$/g;
    let totalIncome = 0;

    while (entry !== 'end of shift') {

        let currentDAta = pattern.exec(entry);

        if (currentDAta) {
            let name = currentDAta.groups.name;
            let product = currentDAta.groups.product;
            let count = Number(currentDAta.groups.count);
            let price = Number(currentDAta.groups.price);
            let sum = count * price;
            totalIncome += sum;

            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }

        entry = inputData.shift();
        currentDAta = pattern.exec(entry);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);

}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

