const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "157.230.77.88",
    port: 5050,
    user: "flag",
    password: "12341234",
    database: "world"
});

// Exercicio 1
// Insiram uma nova cidade na base da dados
// o campo ID é autoinc,
// countryCode tem de der um valido pos trata-se de uma ref para a tabela country (FK) USA, PRT, ...

const insertCitySQL = `INSERT INTO city VALUES(NULL, 'Helderlandia', 'PRT', 'Porto', 1)`;
connection.query(insertCitySQL, function(err, result) {
    console.log(err);
    console.log(result);
});

const sql = `
SELECT *
FROM city
ORDER BY ID DESC
LIMIT 15`;

connection.query(sql, function(err, result) {
    console.table(result);
});
