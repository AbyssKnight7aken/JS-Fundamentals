function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let area = 0;
    let step = 0;

    for (let x = base; x >= 1; x -= 2) {
        step += 1;
        area = Math.pow(x, 2);
        if (step % 5 === 0 && x > 2) {
            stone += Math.pow((x - 2), 2) * increment;
            lapis += (area - Math.pow((x - 2), 2)) * increment;
            continue;
        }
        if (x === 1 || x === 2) {
            gold = Math.pow(x, 2) * increment;
            break;
        }
        stone += Math.pow((x - 2), 2) * increment;
        marble += (area - Math.pow((x - 2), 2)) * increment;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

//thePyramidOfKingDjoser(11, 1)
thePyramidOfKingDjoser(11, 0.75)
//thePyramidOfKingDjoser(12, 1)
//thePyramidOfKingDjoser(23, 0.5)