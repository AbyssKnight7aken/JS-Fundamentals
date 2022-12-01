function arenaTier(input) {

    const inputData = input.slice();
    const gladiators = {};
    let entry = inputData.shift();

    while (entry !== 'Ave Cesar') {

        if (entry.includes(' -> ')) {
            let [name, skill, points] = entry.split(' -> ');
            if (!gladiators[name]) {
                gladiators[name] = {};
                gladiators[name][skill] = Number(points);
                gladiators[name].totalPoints = Number(points);
            }
            if (!gladiators[name][skill]) {
                gladiators[name][skill] = Number(points);
                gladiators[name].totalPoints += Number(points);
            } else {
                if (gladiators[name][skill] < Number(points)) {
                    let currentPoints = gladiators[name][skill];
                    gladiators[name][skill] = Number(points);
                    gladiators[name].totalPoints += (Number(points) - currentPoints);
                }
            }

        } else if (entry.includes(' vs ')) {
            let [gladiator1, gladiator2] = entry.split(' vs ');
            if (gladiators[gladiator1] && gladiators[gladiator2]) {
                let techniques1 = Object.keys(gladiators[gladiator1]);
                let index1 = techniques1.indexOf('totalPoints');
                techniques1.splice(index1, 1);
                let techniques2 = Object.keys(gladiators[gladiator2]);
                let index2 = techniques2.indexOf('totalPoints');
                techniques2.splice(index1, 1);
                for (let i = 0; i < techniques1.length; i++) {
                    if (techniques2.includes(techniques1[i])) {
                        if (gladiators[gladiator1].totalPoints > gladiators[gladiator2].totalPoints) {
                            delete gladiators[gladiator2];
                        } else if (gladiators[gladiator1].totalPoints < gladiators[gladiator2].totalPoints) {
                            delete gladiators[gladiator1];
                        }
                    }
                }
            }

        }

        entry = inputData.shift();
    }

    let sorted = Object.entries(gladiators)
        .sort((a, b) => b[1].totalPoints - a[1].totalPoints || a[0].localeCompare(b[0]));

    for (const gladiator of sorted) {
        console.log(`${gladiator[0]}: ${gladiator[1].totalPoints} skill`);

        let sortedSkills = Object.entries(gladiator[1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        sortedSkills.forEach(skill => {
            if (skill[0] !== 'totalPoints') {
                console.log(`- ${skill[0]} <!> ${skill[1]}`);
            }
        });
    }

}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'])

// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'])

    arenaTier([
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Heal -> 300',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'])  
