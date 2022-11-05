function cardsGame(input) {

    let cards = {};
    let cardsValue = 0;

    for (const line of input) {
        let name = line.split(`: `)[0];
        let draw = line.split(`: `)[1].split(`, `);
        if (!cards.hasOwnProperty(name)) {
            cards[name] = draw;
        } else {
            cards[name] = cards[name].concat(draw);
        }

    }

    for (const key in cards) {
        cards[key] = new Set(cards[key]);
    }

    for (const name in cards) {
        cards[name].forEach(card => {
            let cardPower = card[0];
            let cardType = card[1];
            if (card[1] === `0`) { cardPower = 10; cardType = card[2]; }
            cardsValue += cardsPower(cardPower, cardType);
        });
        console.log(`${name}: ${cardsValue}`);
        cardsValue = 0;
    }

    function cardsPower(power, type) {
        let p = 0;
        let t = 0;
        switch (power) {
            case `J`: p = 11; break;
            case `Q`: p = 12; break;
            case `K`: p = 13; break;
            case `A`: p = 14; break;
            default: p = Number(power); break;
        }

        switch (type) {
            case `C`: t = 1; break;
            case `D`: t = 2; break;
            case `H`: t = 3; break;
            case `S`: t = 4; break;
        }
        return p * t;
    }

}

cardsGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])

cardsGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'])
