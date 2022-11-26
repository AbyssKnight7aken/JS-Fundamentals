function activationKeys(inputData) {

    let rawKey = inputData.shift();
    let line = inputData.shift();
    let command = line.split(">>>")[0];
    let upperOrLower = '';

    while (command !== "Generate") {

        let value1 = line.split(">>>")[1];
        let value2 = line.split(">>>")[2];

        if (command === "Flip") {
            upperOrLower = line.split(">>>")[1];
            value1 = line.split(">>>")[2];
            value2 = line.split(">>>")[3];
        }

        switch (command) {
            case "Contains": contains(value1); break;
            case "Flip": flip(value1, value2); break;
            case "Slice": slice(value1, value2); break;
        }

        line = inputData.shift();
        command = line.split(">>>")[0];
    }

    console.log(`Your activation key is: ${rawKey}`);

    function contains(substring) {
        if (rawKey.includes(substring)) {
            console.log(`${rawKey} contains ${substring}`);
        } else {
            console.log(`Substring not found!`);
        }
    }

    function flip(startIndex, endIndex) {
        if (upperOrLower === "Upper") {
            let slice1 = rawKey.slice(0, Number(startIndex));
            let slice2 = rawKey.slice(Number(endIndex));
            let substring = rawKey.substring(Number(startIndex), Number(endIndex)).toUpperCase();
            rawKey = slice1 + substring + slice2;
            console.log(rawKey);
        }
        if (upperOrLower === "Lower") {
            let slice1 = rawKey.slice(0, Number(startIndex));
            let slice2 = rawKey.slice(Number(endIndex));
            let substring = rawKey.substring(Number(startIndex), Number(endIndex)).toLowerCase();
            rawKey = slice1 + substring + slice2;
            console.log(rawKey);
        }
    }

    function slice(startIndex, endIndex) {
        let slice1 = rawKey.slice(0, Number(startIndex));
        let slice2 = rawKey.slice(Number(endIndex));
        rawKey = slice1 + slice2;
        console.log(rawKey);
    }
}

activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])


// activationKeys(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])

