const http =  require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath;


    switch (req.url) {
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about-me.html';
            break;
        case '/contact-me':
            filePath = 'contact-me.html';
            break;
        default:
            filePath = '404.html';
    }

    filePath = path.join(__dirname, filePath);


    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    })
})

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});