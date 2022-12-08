function SantaSecretHelper(input) {

    let key = Number(input[0]);
    const arr = [];
    let pattern = /[@]{1}(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behavior>[GN])!/;

    for (let index = 1; index < input.length; index++) {
        let decodedText = '';
        const currentString = input[index];
        if (currentString === 'end') { break; }
        for (let i = 0; i < currentString.length; i++) {
            let char = String.fromCharCode(currentString[i].charCodeAt() - key);
            decodedText += char
        }
        arr.push(decodedText)
    }

    for (const line of arr) {
        let match = pattern.exec(line);
        if (match && match.groups.behavior === 'G') {
            console.log(match.groups.name);
        } else { continue; }
    }

}

// SantaSecretHelper(['3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejnW$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end'])

SantaSecretHelper(["4",
    "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
    "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
    ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    "DReh}e=<4lhzj1%K%",
    "end"])

// SantaSecretHelper(['3',
// "N}eideidmk$'(mnyenmCNlpamnin$J$",
// 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
// 'ppqmkkkmnolmnnCEhq/vkievk$Q$',
// 'yyegiivoguCYdohqwlqh/kguimhk$J$',
// 'end'])