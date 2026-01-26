const mysql = require("mysql2/promise");

async function runQuery() {
    const connection = await mysql.createConnection({
        host: "157.230.77.88",
        port: 5050,
        user: "flag",
        password: "12341234",
        database: "world"
    });

    const sql = 'SELECT * FROM city LIMIT 5';
    
    const [result] = await connection.query(sql);
    console.log(result);
    
    
}

runQuery();



// const x = {
//     nome: "Helder",
//     idade: 44,
//     cidade: "Porto"
// }

// // const nome = x.nome;
// // const idade = x.idade;

// const {nome, idade} = x;

// const y = ["amarelo", "vermelho", "azul"];

// // const [cor1, cor2] = y;
// const cor1 = y[0];
// const cor2 = y[1];