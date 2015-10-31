var express = require('express');
var app = express();
var myoListeners = require('./server/pitchGestures.js');
var WebSocketServer = require('websocket').server;

app.get('/', function (req, res) {
    res.send('Its time for dodger baseball!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
    console.log (myoListeners);
});