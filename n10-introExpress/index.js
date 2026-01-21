const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.send('Homepage');
});

app.get("/about", function(req, res) {
    res.send('ABOUT PAGE');
});

app.get("/gallery", function(req, res) {
    res.send('some images I dunno...');
});

app.listen(port, function() {
    console.log(`Running on port ${port}`);
});
