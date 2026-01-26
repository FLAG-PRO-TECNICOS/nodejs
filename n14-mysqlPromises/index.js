const cities = require("./db/cities");

async function run() {
    const result = await cities.getAllCities();
    console.table(result);
}
run();