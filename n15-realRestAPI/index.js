import "dotenv/config";
import express from "express";
import cities from "./db/cities.js";

const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send("HELLO");
});

app.get("/cities", async function(req, res) {
    const cityData = await cities.getAllCities();
    res.json(cityData);
});

app.get("/cities/:id", async function (req, res) {
    const id = parseInt(req.params.id);
    if (!id) {
        res.status(400).end();
        return;
    }
    
    const cityData = await cities.getCityById(id);
    if (!cityData) {
        res.status(404).end();
        return;
    }

    res.json(cityData);
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});