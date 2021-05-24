console.log("SSL/TLs \u{1F511} SERVER using self generated certificate")

const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs')

const app = express();

app.use('/', (req, res, next) => {
    res.send("hello from SSL server")
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(3443, ()=> console.log("secure server \u{1F680}\u{1F511} on port 3443"))