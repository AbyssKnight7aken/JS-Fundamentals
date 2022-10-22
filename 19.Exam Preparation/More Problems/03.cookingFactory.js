function cookingFactory(inputData) {

    let index = 0;
    let command = inputData[index];
    let breadBatch = command.split(`#`).map(Number);
    console.log(`breadBatch`);
    console.log(breadBatch);
    let breadQuality = 0;
    let highestBreadQuality = 0;
    let highestBreadBatch = [];

    while (command !== `Bake It!`) {

        breadQuality = breadBatch.reduce((a, b) => a + b, 0);
        console.log(breadQuality);

        if (breadQuality > highestBreadQuality) {
            highestBreadQuality = breadQuality;
            highestBreadBatch = breadBatch.slice(0);
        }
        else if (breadQuality === highestBreadQuality) {

            let avarageBreadQuality = breadQuality / breadBatch.length;
            let maxAverageBreadQuality = highestBreadQuality / highestBreadBatch.length;

            if (avarageBreadQuality > maxAverageBreadQuality) {
                highestBreadBatch = breadQuality;
                highestBreadBatch = breadBatch.slice(0);
            }
            else if (avarageBreadQuality === maxAverageBreadQuality) {
                if (breadBatch.length < highestBreadBatch.length) {
                    highestBreadQuality = breadQuality;
                    highestBreadBatch = breadBatch.slice(0);
                }
            }
        }

        index++;
        command = inputData[index];
        breadBatch = command.split(`#`).map(Number);
        console.log(breadBatch);
    }

    console.log(`---------------------`);
    console.log(`Best Batch quality: ${highestBreadQuality}`);
    console.log(highestBreadBatch);

}

cookingFactory(['5#7#72#14#4',
    '41#35#37#33',
    '23#16#27#42#12#63#39#32',
    '2#20#28#14',
    '23#16#27#42#12#63#71',
    '66#16#34#31#10#24',
    'Bake It!'])