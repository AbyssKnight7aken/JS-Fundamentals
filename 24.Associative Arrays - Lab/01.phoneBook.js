function phoneBook(input) {

    const phoneRegister = {};

    for (const line of input) {
        let [name, phone] = line.split(` `);
        phoneRegister[name] = phone;
    }

    for (const entry in phoneRegister) {
        console.log(`${entry} -> ${[phoneRegister[entry]]}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)
