function bitcoinMining(input) {

    let gold = 0;
    let money = 0;
    let bitcoinPrice = 11949.16;
    let bitcoins = 0;
    let index = 0;
    let day1 = 0;

    for (let days = 1; days <= input.length; days++) {
        gold = Number(input[index]);
        index++;
        if (days % 3 === 0) { gold = gold * 0.7; }
        money += gold * 67.51;
        if (money >= bitcoinPrice) {
            for (let i = money; i >= bitcoinPrice; i -= bitcoinPrice) {
                bitcoins += 1;
                money -= bitcoinPrice;
                if (bitcoins === 1) { day1 = days; }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins !== 0) { console.log(`Day of the first purchased bitcoin: ${day1}`); }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])
bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])