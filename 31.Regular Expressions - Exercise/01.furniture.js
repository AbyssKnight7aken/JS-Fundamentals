function furniture(inputData) {

    let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let entry = inputData.shift();
    let sum = 0;

    console.log(`Bought furniture:`);

    while (entry !== 'Purchase') {
        let matches = entry.matchAll(pattern);
        for (const match of matches) {
            let name = match.groups.name;
            let price = match.groups.price;
            let quantity = match.groups.quantity;
            if (matches) {
                sum += price * quantity;
                console.log(match.groups.name);
            }
        }

        entry = inputData.shift();
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])

furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])