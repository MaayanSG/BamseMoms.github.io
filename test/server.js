var app       =     require("express")();
var express = require("express");
var http      =     require('http').Server(app);
var osc       =     require('node-osc');
var oscServer = new osc.Server(22223, '127.0.0.1');

// ========== Pages ========== //
// Allows acess to all files inside 'public' folder.
app.use(express.static(__dirname + "/public"));

// Configures each link to a different page.
// e.g. localhost:3000/   will load index.html
// e.g. localhost:3000/led    will load led.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/yo', function(req, res) {
    res.sendFile(__dirname + '/public/yo.html');
});
app.get('/luminosidade', function(req, res) {
    res.sendFile(__dirname + '/public/luminosidade.html');
});
app.get('/shast', function(req, res) {
    res.sendFile(__dirname + '/public/shast.html');
});

// Hosts the page on port 3000
http.listen(3000,function(){
    console.log("Listening on 3000");
});
