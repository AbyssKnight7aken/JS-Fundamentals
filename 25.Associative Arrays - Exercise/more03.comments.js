function comments(inputData) {

    const commentsInfo = {};
    const users = [];
    const articles = [];
    let userName = ``;
    let article = ``;

    for (const entry of inputData) {
        if (entry.includes(`user `)) {
            userName = entry.split(`user `)[1];
            users.push(userName);
        }
        else if (entry.includes(`article `)) {
            article = entry.split(`article `)[1];
            articles.push(article);
            commentsInfo[article] = [];
        }
        else {
            userName = entry.split(` posts`)[0];
            let line = entry.split(`posts on `)[1];
            article = line.split(`:`)[0];
            let splittedLine = line.split(`: `)[1];
            let commentTitle = splittedLine.split(`,`)[0];
            let comment = splittedLine.split(`, `)[1];
            if (users.includes(userName) && articles.includes(article)) {
                commentsInfo[article].push({ userName, commentTitle, comment });
            }

        }
    }


    let sorted = Object.entries(commentsInfo).sort((a, b) => b[1].length - a[1].length);

    for (const el of sorted) {
        console.log(`Comments on ${el[0]}`);
        let comments = el[1];
        if (comments.length > 1) {
            let sortedComments = Object.entries(comments).sort((a, b) => a[1].userName.localeCompare(b[1].userName));
            sortedComments.forEach(element => {
                console.log(`--- From user ${element[1].userName}: ${element[1].commentTitle} - ${element[1].comment}`);
            });
        } else {
            el[1].forEach(e => {
                console.log(`--- From user ${e.userName}: ${e.commentTitle} - ${e.comment}`);
            });
        }

    }

}

comments([
    'user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4',
    'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'])

comments([
    'user Mark', 'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby', 'article Steven', 'user Liam', 'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])