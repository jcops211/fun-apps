const http = require('http')
const fs = require('fs')
const $ = require('jquery')
var express = require("express");
const request = require('request');

var app = express();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

app.listen(3000, (req, res) => {
    console.log("Server running on port 3000");
   });

app.get("/stock", (req, res, next) => {
    res.json(["Stock","1"]);
});

server.listen(process.env.PORT || 6968, () => {
    console.log('Server Listenting on port 6968')
});
