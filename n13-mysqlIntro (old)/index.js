const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "157.230.77.88",
    port: 5050,
    user: "flag",
    password: "12341234",
    database: "world"
});

connection.query("SELECT name, region AS the_region FROM country LIMIT 5", function(err, result) {
    console.log(err);
    console.log(result);
});
console.log("DONE!");