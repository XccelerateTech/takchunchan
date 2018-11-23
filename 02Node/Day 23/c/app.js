var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('I get');
});

app.post('/login/:id', function(req, res){
    console.log(req.params.id);
    res.send('I send')
})

app.listen(8080);