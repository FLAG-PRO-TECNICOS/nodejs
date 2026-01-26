const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
    host: "157.230.77.88",
    port: 5050,
    user: "flag",
    password: "12341234",
    database: "world"
});

module.exports = connection;