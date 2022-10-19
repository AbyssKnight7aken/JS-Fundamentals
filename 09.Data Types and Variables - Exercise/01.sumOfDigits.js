// function sumOfDigits(number) {

//     let n = String(number);
//     let sum = 0;
//     for (let a = 0; a < n.length; a++) {
//         let digit = Number(n.charAt(a));
//         sum += digit;
//     }
//     console.log(sum);
// }

function sumOfDigits(n) { 

    sum = 0;

while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);
}

sumOfDigits(245678)
sumOfDigits(97561)
sumOfDigits(543)