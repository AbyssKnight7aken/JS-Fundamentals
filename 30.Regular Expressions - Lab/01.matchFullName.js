function matchFullName(inputText) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = inputText.match(pattern);

    console.log(validNames.join(' '));

}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")