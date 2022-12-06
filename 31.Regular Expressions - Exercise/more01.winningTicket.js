function winningTicket(input) {

    let tickets = input.split(',');
    //let pattern = /[@#$^]{6,}/gm;
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
    //console.log(tickets);

    for (let index = 0; index < tickets.length; index++) {
        const currentTicket = tickets[index].trim();
        if (currentTicket.length !== 20) {
            console.log('invalid ticket');
            continue;
        }
        let half = currentTicket.length / 2;
        //console.log(currentTicket);
        let leftHalf = currentTicket.substring(0, half);
        //console.log(leftHalf);
        let rightHalf = currentTicket.substring(half);
        //console.log(rightHalf);
        let leftMatch = leftHalf.match(pattern);
        //console.log(leftMatch);
        let rightMatch = rightHalf.match(pattern);
        //console.log(rightMatch);

        if (leftMatch && rightMatch) {
            if (leftMatch.toString().length === 10 && rightMatch.toString().length === 10) {
                console.log(`ticket "${currentTicket}" - ${leftMatch.toString().length}${leftMatch.toString()[0]} Jackpot!`);
            } else {
                console.log(`ticket "${currentTicket}" - ${leftMatch.toString().length}${leftMatch.toString()[0]}`);
            }
        } else {
            console.log(`ticket "${currentTicket}" - no match`);
        }
    }

}

winningTicket('Cash$$$$$$Ca$$$$$$sh')
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')
winningTicket('validticketnomatch:(')