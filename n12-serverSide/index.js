const data = require("./data");
const express = require("express");
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    // na homepage vou mostrar uma lista
    // com o nome e link de todos os eventos

    res.render("index", {
        eventList: data
    });
});

app.get("/events", function(req, res) {

    const index = req.query.index || 0;
    const event = data[index];

    res.render("event", {
        event: event
    });
})

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})