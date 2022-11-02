function storage(inputData) {

    let productStorrage = new Map();

    for (const line of inputData) {
        let [product, quantity] = line.split(` `);
        quantity = Number(quantity);
        if (productStorrage.has(product)) {
            quantity += productStorrage.get(product);
        }
        productStorrage.set(product, quantity);
    }

    for (const [product, quantity] of productStorrage) {
        console.log(`${product} -> ${quantity}`);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'])