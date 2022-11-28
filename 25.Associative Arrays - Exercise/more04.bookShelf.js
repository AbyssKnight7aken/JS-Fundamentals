function bookShelf(inputData) {

    const booksInfo = {};
    const gernes = [];

    for (const entry of inputData) {

        if (entry.includes(`->`)) {
            let [shelfID, shelfGerne] = [...entry.split(` -> `)]
            if (!booksInfo[shelfID]) {
                booksInfo[shelfID] = { shelfGerne, books: [] }
                gernes.push(shelfGerne);
                gernes.push(shelfID);
            }
        } else {
            let bookTitle = entry.split(`: `)[0];
            let author = entry.split(`: `)[1].split(`, `)[0];
            let bookGerne = entry.split(`: `)[1].split(`, `)[1];
            if (gernes.includes(bookGerne)) {
                let id = gernes[gernes.indexOf(bookGerne) + 1];
                booksInfo[id].books.push({ bookTitle, author });
            }
        }
    }

    let sorted = Object.entries(booksInfo).sort((a, b) => b[1].books.length - a[1].books.length);

    for (const el of sorted) {
        console.log(`${el[0]} ${el[1].shelfGerne}: ${el[1].books.length}`);
        let sortedNames = el[1].books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        sortedNames.forEach(name => {
            console.log(`--> ${name.bookTitle}: ${name.author}`);
        });
    }
}

bookShelf([
    '1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'])

bookShelf([
    '1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'])