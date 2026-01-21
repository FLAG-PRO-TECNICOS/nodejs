// Exercicio 1:
// Ler o ficheiro de JSON
// criar um array com
// id, email, telefone, nome completo do cliente, numero de orders

// Exercicio 2:
// Guardar a tabela com os dados acima definidos num ficheiro CSV

const fs = require("fs");

const ordersJSON = fs.readFileSync("./data/orders.json");
const orders = JSON.parse(ordersJSON);

const newData = [];
orders.customers.forEach(element => {
    // const x = {};

    // x.id = element.customerId
    // x.email = element.profile.email;
    // x.telefone = element.profile.phone;
    // x.nome = `${element.profile.name.first} ${element.profile.name.last}`;
    // x.numeroOrders = element.orders.length;
    
    // newData.push(x);

    newData.push({
        id: element.customerId,
        email: element.profile.email,
        telefone: element.profile.phone,
        nome: `${element.profile.name.first} ${element.profile.name.last}`,
        numeroOrders: element.orders.length
    })
});

const newData2 = orders.customers.map(element => {
    return {
        id: element.customerId,
        email: element.profile.email,
        telefone: element.profile.phone,
        nome: `${element.profile.name.first} ${element.profile.name.last}`,
        numeroOrders: element.orders.length
    }
});

console.table(newData2);

let csvData = "id,email,telefone,nome,numeroOrders\n";
newData.forEach(element => {
    const line = `${element.id},${element.email},${element.telefone},${element.nome},${element.numeroOrders}`
    csvData += line + "\n";
});
console.log(csvData);

fs.writeFileSync("./data/data.csv", csvData);

// TPC:
// 
// substituir a criacao manual das linhas do CSV
// por uma libraria do NPM por exemplo fast-csv



// const objectivo = [
//     {
//         id: 1,
//         email: "anasilva@mail.com",
//         telefone: 123,
//         nome: "Ana Silva",
//         numeroOrders: 4
//     },
//     {
//         id: 4,
//         email: "miguelcosta@mail.com",
//         telefone: 123,
//         nome: "Miguel Costa",
//         numeroOrders: 4
//     },
//     {
//         id: 40,
//         email: "joanap@mail.com",
//         telefone: 123,
//         nome: "Joana Pereira",
//         numeroOrders: 2
//     }
// ];
