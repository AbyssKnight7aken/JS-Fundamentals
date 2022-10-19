function orders(product, quantity) {

    let sum = 0;

    switch (product) {

        case `coffee`: sum = quantity * 1.50; break;
        case `water`: sum = quantity * 1.00; break;
        case `coke`: sum = quantity * 1.40; break;
        case `snacks`: sum = quantity * 2.00; break;
    }

    return sum.toFixed(2);

}

orders("water", 5)
orders("coffee", 2)


// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
