import connection from "./connection.js";

async function getAllCities() {
    const sql = `SELECT * FROM city LIMIT 50`;
    const [result] = await connection.execute(sql);

    return result;
}

async function getCityById(id) {
    const sql = `SELECT * FROM city WHERE id = ?`;
    const [result] = await connection.execute(sql, [id]);

    return result[0];
}

async function searchCities(cityName) {
    console.log("test");
    console.log(cityName);
    const sql = `SELECT * FROM city WHERE name LIKE ?`;
    const [result] = await connection.execute(sql, ['%' + cityName + '%']);

    console.table(result);

    return result;
}

export default {
    getAllCities,
    getCityById,
    searchCities
}