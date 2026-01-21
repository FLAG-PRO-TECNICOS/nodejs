const http = require("http");

const port = 3000;
const server = http.createServer(function(req, res) {

    const someData = {
        status: "ok",
        results: [
            {
                name: "Joe",
                email: "joe@mail.com"
            },
            {
                name: "Bob",
                email: "non@mail.com"
            },
            {
                name: "Babs",
                email: "barbara@mail.com"
            },
            {
                name: "Jana",
                email: "jane@mail.com"
            },
        ]
    }
    

    if (req.url === "/") {
        res.writeHead(200, {
            'content-type': 'application/json'
        });  
        res.end(JSON.stringify(someData));

    } else if (req.url === "/about") {
        
        res.end('ABOUT PAGE iS AWESOME!!!!');
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(port, function() {
    console.log(`Running on ${port}`);
});