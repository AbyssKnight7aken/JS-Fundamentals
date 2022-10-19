function login(input) {

    let index = 0;
    let userName = input[index];
    index++;
    let command = input[index]
    index++
    let incorrectLogins = 0;

    let password = userName.split("").reverse().join("");
    //console.log(password);

    while (command !== password) {
        let currentPassword = command;
        command = input[index];
        index++;
         incorrectLogins += 1;
        if (incorrectLogins === 4) { console.log(`User ${userName} blocked!`); return; }
        console.log(`Incorrect password. Try again.`);
    }
    console.log(`User ${userName} logged in.`);
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])