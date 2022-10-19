function listOfProducts(array) {

    let sortedArray = array.sort();

    for (let i = 0; i < array.length; i++) {
        sortedArray[i] = `${i + 1}.${sortedArray[i]}`;

    }

    console.log(sortedArray.join(`\n`));

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])