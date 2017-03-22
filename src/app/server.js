var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(4446, function () {
    console.log('Example app listening on port 4446!')
});