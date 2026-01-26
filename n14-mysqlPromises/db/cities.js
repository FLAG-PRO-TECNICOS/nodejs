const db = require("./db");

async function getAllCities() {
    const sql = `SELECT * FROM city LIMIT 5`;
    const connection = await db;

    const [result] = await connection.query(sql);

    return result;
}

module.exports = {
    getAllCities
}