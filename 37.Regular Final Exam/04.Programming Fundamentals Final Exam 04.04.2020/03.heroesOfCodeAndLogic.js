function heroesOfCodeAndLogic(input) {

    const inputData = input.slice(0);
    const heroesNumber = Number(inputData.shift());
    const heroes = {};
    const maxHP = 100;
    const maxMP = 200;
    let entry = inputData.shift();

    for (let index = 0; index < heroesNumber; index++) {
        let [hero, hitPoints, manaPoints] = entry.split(' ');
        heroes[hero] = { hitPoints: Number(hitPoints), manaPoints: Number(manaPoints) };
        entry = inputData.shift();
    }

    while (entry !== 'End') {

        let [command, hero, value, name] = entry.split(' - ');

        switch (command) {
            case 'CastSpell': castSpell(hero, value, name); break;
            case 'TakeDamage': takeDamage(hero, value, name); break;
            case 'Recharge': recharge(hero, value); break;
            case 'Heal': heal(hero, value); break;
        }
        entry = inputData.shift();
    }

    for (const hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hitPoints}`);
        console.log(`  MP: ${heroes[hero].manaPoints}`);
    }


    function castSpell(heroName, neededMP, spellName) {
        if (heroes[heroName].manaPoints - Number(neededMP) < 0) {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        } else {
            heroes[heroName].manaPoints -= Number(neededMP);
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPoints} MP!`);
        }
    }

    function takeDamage(heroName, damage, attacker) {
        if (heroes[heroName].hitPoints - Number(damage) <= 0) {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete heroes[heroName];
        } else {
            heroes[heroName].hitPoints -= Number(damage);
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hitPoints} HP left!`);
        }
    }

    function recharge(heroName, amount) {
        if (heroes[heroName].manaPoints + Number(amount) > maxMP) {
            let recoverdMP = maxMP - heroes[heroName].manaPoints;
            heroes[heroName].manaPoints = maxMP;
            console.log(`${heroName} recharged for ${recoverdMP} MP!`);
        } else {
            heroes[heroName].manaPoints += Number(amount);
            console.log(`${heroName} recharged for ${Number(amount)} MP!`);
        }
    }

    function heal(heroName, amount) {
        if (heroes[heroName].hitPoints + Number(amount) > maxHP) {
            let recoverdHP = maxHP - heroes[heroName].hitPoints;
            heroes[heroName].hitPoints = maxHP;
            console.log(`${heroName} healed for ${recoverdHP} HP!`);
        } else {
            heroes[heroName].hitPoints += Number(amount);
            console.log(`${heroName} healed for ${Number(amount)} HP!`);
        }
    }

}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])

heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])