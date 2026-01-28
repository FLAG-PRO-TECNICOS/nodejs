import mysql from "mysql2/promise";

// mysql.createConnection("mysql://flag:12341234@157.230.77.88:5050/world");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;