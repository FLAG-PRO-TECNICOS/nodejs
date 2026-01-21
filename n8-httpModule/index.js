const http = require("http");
const os = require("os");

const startServerTime = Date.now();

const port = 3000;
const server = http.createServer(function(req, res) {
    console.log("Incoming request...");
    console.log(req);

    res.writeHead(200, {
        'content-type': 'text/html'
    });

    res.write('<h2>Hello World</h2>');
    res.write(`<h2>OS uptime: ${(os.uptime() / 3600).toFixed(2)}</h2>`);
    res.write(`<h3>Server start datetime: ${new Date(startServerTime).toLocaleString('pt-PT')}</h3>`);
    res.write(`<h3>Current datetime: ${new Date().toLocaleString('pt-PT')}</h3>`);
    res.write(`<h3>Server app uptime: ${Math.round((Date.now() - startServerTime)/1000)} secs</h3>`);
    
    res.end();
});

server.listen(port, function() {
    console.log(`Server running on port ${port}`);
});

// usar o servidor
// que responde a quanto tempo esta ligado em minutos...