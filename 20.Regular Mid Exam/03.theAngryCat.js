function angryCat(itemsArray, entryPoint, itemType) {

    let leftDamage = 0;
    let rightDamage = 0;

    for (let i = 0; i < itemsArray.length; i++) {
        if (i < entryPoint) {
            leftDamage += damageCalculator(itemsArray[i], itemsArray[entryPoint], itemType);
        } else if (i > entryPoint) {
            rightDamage += damageCalculator(itemsArray[i], itemsArray[entryPoint], itemType);
        }
    }

    function damageCalculator(priceRate, entryPoint, itemType) {
        if ((priceRate < entryPoint && itemType === 'cheap') || (priceRate >= entryPoint && itemType === 'expensive')) {
            return priceRate;
        }
        return 0;
    }

    let position = '', damage = 0;

    if (leftDamage >= rightDamage) {
        position = 'Left';
        damage = leftDamage;
    } else {
        position = 'Right';
        damage = rightDamage;
    }

    console.log(`${position} - ${damage}`);

}

angryCat([1, 5, 1], 1, "cheap")  // Left - 1
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");  // Right - 4
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");  // Left - 20