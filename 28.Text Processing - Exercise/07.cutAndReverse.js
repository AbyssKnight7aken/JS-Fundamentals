function cutAndReverse(string) {

    let firstPart = string.slice(0, string.length / 2).split(``).reverse().join(``);
    let lastPart = string.slice(string.length / 2).split(``).reverse().join(``);

    console.log(firstPart);
    console.log(lastPart);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')