const user = {
    name: "Sergey",
    age: 30,
    city: "Novorossiysk",

    sayHi() {
        console.log(`Hello ${user.name}`)
    }
}
user.sayHi();

//==============================================================

const users = [
    {
        name: "Alex",
        age: 23,
        isAdmin: false,
    },

    {
        name: "Roki",
        age: 32,
        isAdmin: true,
    },

    {
        name: "Julia",
        age: 26,
        isAdmin: true,
    },

    {
        name: "Bran",
        age: 34,
        isAdmin: false,
    },
];

let ordinaryUsers = 0;

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!user.isAdmin) {
        ordinaryUsers++;
    }
}
console.log(`Количество обычных пользователей: ${ordinaryUsers}`);