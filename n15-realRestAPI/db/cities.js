import pool from "./pool.js";

async function getAllCities() {
    const sql = `SELECT * FROM city`;
    const [result] = await pool.execute(sql);

    return result;
}

async function getCityById(id) {
    const sql = `SELECT * FROM city WHERE id = ?`;
    const [result] = await pool.execute(sql, [id]);

    return result[0];
}

// SQL INJECTION
// SELECT * FROM users WHERE username = '${user}' AND PASSWORD = '${pass}'
// ' OR 1 = 1 --

export default {
    getAllCities,
    getCityById
}