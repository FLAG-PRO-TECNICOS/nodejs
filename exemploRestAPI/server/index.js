import express from "express";
import cities from "./db/cities.js";
import cors from "cors";

const app = express();

const port = 3000;

app.use(cors());

app.get("/cities", async function(req, res) {
    const cityList = await cities.getAllCities();
    res.json(cityList);
});

app.get("/cities/search", async function(req, res) {
    const c = req.query.c;
    const cityList = await cities.searchCities(c);
    console.log(cityList)
    res.json(cityList);
});

app.get("/cities/:id", async function(req, res) {
    const id = req.params.id;
    const city = await cities.getCityById(id);
    res.json(city);
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})