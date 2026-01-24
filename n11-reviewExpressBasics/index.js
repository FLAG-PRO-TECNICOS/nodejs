const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    // BROWSER ENVIA SEMPRE UM USER AGENT...
    
    const userAgent = req.headers["user-agent"];

    if (userAgent.includes("Linux")) {
        res.send("Hello Linux User");
    } else if (userAgent.includes("Mac")) {
        res.send("Hello Mac User");
    } else if (userAgent.includes("Windows")) {
        res.send("Hello Windows User");
    } else {
        res.send("Hello Something... User");
    }
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});
