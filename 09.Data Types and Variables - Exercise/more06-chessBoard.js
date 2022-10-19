function chessBoard(size) {


    console.log(`<div class="chessboard">`);

    for (let x = 1; x <= size; x++) {
        console.log(`  <div>`);
        for (let y = 1; y <= size; y++) {
            let color = ``;
            if ((x + y) % 2 === 0) { color = `black`; }
            else { color = `white`; }
            console.log(`<span class="${color}"></span>`);
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}

chessBoard(3)