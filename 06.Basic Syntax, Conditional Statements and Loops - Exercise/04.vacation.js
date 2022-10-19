function vacation(group, groupType, day) {

    let price = 0;
    let discount = 1;

    switch (groupType) {
        case `Students`:
            if (group >= 30) { discount = 0.85; }
            if (day === `Friday`) { price = group * 8.45 * discount; }
            else if (day === `Saturday`) { price = group * 9.80 * discount; }
            else if (day === `Sunday`) { price = group * 10.46 * discount; }
            break;
        case `Business`:
            if (group >= 100) { group = group - 10; }
            if (day === `Friday`) { price = group * 10.90 * discount; }
            else if (day === `Saturday`) { price = group * 15.60 * discount; }
            else if (day === `Sunday`) { price = group * 16 * discount; }
            break;
        case `Regular`:
            if (group >= 10 && group <= 20) { discount = 0.95; }
            if (day === `Friday`) { price = group * 15 * discount; }
            else if (day === `Saturday`) { price = group * 20 * discount; }
            else if (day === `Sunday`) { price = group * 22.50 * discount; }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, `Students`, `Sunday`)
//vacation(40, `Regular`, `Saturday`)