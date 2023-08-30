const http = require('http');
const path = require('path');

const express = require('express');
const app = express();

// this function will serve your static files
app.use('/style', express.static(path.join(__dirname, 'views', 'assets', 'css')));

app.get('/', function (req, res) {
    // this function will send the index file
    // path.join will make you the full address of index.html file
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


let server = http.createServer({}, app);

let listeningPort = 4000;
server.listen(listeningPort, function () {
    console.log("panel app listening on port " + listeningPort + "!");
}).on('error', function (err) {
    console.error("HTTPS server error:", err.message);
    process.exit(1);
});
