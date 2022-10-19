function commonElements(array1, array2) {

    for(let a = 0; a <= array1.length - 1; a ++){
        for(let b = 0; b <= array2.length -1; b ++){
            if( array1[a] === array2[b]) {console.log(array1[a]);}
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])