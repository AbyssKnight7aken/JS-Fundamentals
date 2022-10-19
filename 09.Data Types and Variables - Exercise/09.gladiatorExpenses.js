function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let aureus = 0;
    let armorBreaker = 0;

    for (let lostFights = 1; lostFights <= lostFightsCount; lostFights++) {
        if (lostFights % 2 === 0) { aureus += helmetPrice; }
        if (lostFights % 3 === 0) { aureus += swordPrice; }
        if (lostFights % 2 === 0 & lostFights % 3 === 0) {
            aureus += shieldPrice; armorBreaker += 1;
            if (armorBreaker % 2 === 0) { aureus += armorPrice; }
        }
    }
    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)