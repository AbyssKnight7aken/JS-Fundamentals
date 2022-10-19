function sortBy2Criteria(stringArray) {

    let sortedArray = stringArray.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArray.join(` `));

    // let sortedArray = stringArray.sort((a, b) => {
    //     if (a.length > b.length) {
    //         return 1;
    //     }
    //     else if (a.length < b.length) {
    //         return -1;
    //     }
    //     else {
    //         if (a > b) {
    //             return 1;
    //         }
    //         else if (a < b) {
    //             return -1;
    //         }
    //         else {
    //             return 0
    //         }
    //     }
    // })

    // return sortedArray.join(`\n`);

}

sortBy2Criteria(['alpha', 'beta', 'gamma'])
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])