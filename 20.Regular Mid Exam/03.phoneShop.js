function phoneShop(inputData) {

    const inputArray = inputData.slice();
    phoneStore = inputArray.shift().split(`, `);
    operation = inputArray.shift().split(` - `);
    command = operation[0];

    while (command !== `End`) {

        let phoneModel = operation[1];

        switch (command) {

            case `Add`: add(phoneModel); break;
            case `Remove`: remove(phoneModel); break;
            case `Bonus phone`: bonusPhone(phoneModel); break;
            case `Last`: last(phoneModel); break;

        }

        operation = inputArray.shift().split(` - `);
        command = operation[0];
    }

    function add(phone) {
        if (!phoneStore.includes(phone))
            phoneStore.push(phone);
    }

    function remove(phone) {
        if (phoneStore.includes(phone)) {
            let index = phoneStore.indexOf(phone);
            phoneStore.splice(index, 1);
        }
    }

    function bonusPhone(phone) {
        let bonusPhones = phone.split(`:`);
        let oldPhone = bonusPhones[0];
        let newPhone = bonusPhones[1];
        if (phoneStore.includes(oldPhone)) {
            let index = phoneStore.indexOf(oldPhone);
            phoneStore.splice(index + 1, 0, newPhone);
        }

    }

    function last(phone) {
        if (phoneStore.includes(phone)) {
            let index = phoneStore.indexOf(phone);
            let lastPhone = phoneStore.splice(index, 1);
            phoneStore.push(lastPhone);
        }
    }

    console.log(phoneStore.join(`, `));

}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
)

phoneShop((["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])
)

phoneShop((["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])
)