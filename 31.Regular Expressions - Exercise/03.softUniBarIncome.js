function softUniBarIncome(inputData) {

    const customerInfo = {};
    let entry = inputData.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|&%.]*<(?<product>\w+)>[^|&%.]*\|(?<count>\d+)\|[^\d|&%.]*(?<price>[0-9|\.]+)\$/g;

    while (entry !== 'end of shift') {
        let currentDAta = pattern.exec(entry);
        console.log(currentDAta);
        //to do...
        entry = inputData.shift();
        currentDAta = pattern.exec(entry);
    }

}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
