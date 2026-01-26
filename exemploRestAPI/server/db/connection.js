import mysql from "mysql2/promise";

const connection = await mysql.createPool({
    host: "157.230.77.88",
    port: 5050,
    user: "flag",
    password: "12341234",
    database: "world"
});

export default connection;