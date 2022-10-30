function storeProvision(stock, delivery) {

    const storage = {};
    const deliveryLength = delivery.length;

    while (stock.length > 0) {
        let currentProduct = stock.shift();
        let currentProductQuantity = stock.shift();
        storage[currentProduct] = Number(currentProductQuantity);
    }

    for (let i = 0; i < deliveryLength; i += 2) {
        if (!storage.hasOwnProperty(delivery[i])) {
            storage[delivery[i]] = Number(delivery[i + 1]);
        } else {
            storage[delivery[i]] += Number(delivery[i + 1]);
        }
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`)
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])    