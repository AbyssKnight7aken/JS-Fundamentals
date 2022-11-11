function comments(inputData) {

    const commentsInfo = {};
    const users = [];
    const articles = [];
    let userName = ``;
    let article = ``;
    let index = 0;
    let counter = 0;

    for (const entry of inputData) {
        console.log(entry);
        if (entry.includes(`user `)) {
            userName = entry.split(`user `)[1];
            users.push(userName);
            
            console.table(commentsInfo);
        }
        else if (entry.includes(`article `)) {
            article = entry.split(`article `)[1];
            articles.push(article);
            commentsInfo[article] = [];
            console.table(commentsInfo);
        }
        else {
            userName = entry.split(` posts`)[0];
            let line = entry.split(`posts on `)[1];
            article = line.split(`:`)[0];
            let splittedLine = line.split(`: `)[1];
            let commentTitle = splittedLine.split(`,`)[0];
            let comment = splittedLine.split(`, `)[1];
            if (users.includes(userName) && articles.includes(article)) {
                index++;
                console.log(commentsInfo);
                commentsInfo[article][userName] = [commentTitle, comment];
            }

        }
    }

    console.table(commentsInfo);

    let sorted = Object.entries(commentsInfo);//sort((a,b) => b[1][1].length  - a[1][1].length);
    console.table(sorted[1]);
    console.table(sorted[1][1]);

}

comments([
    'user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4',
    'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])

// comments([
//     'user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby', 'article Steven', 'user Liam', 'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])