var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Step to the plate at http://%s:%s', host, port);
});