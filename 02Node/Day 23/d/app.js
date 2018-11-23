var express = require('express')
var bodyParser = require('body-parser')
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/sum', (req, res) => {
    var myArray = req.body;
    var sum = myArray.reduce(reducer);
    console.log(sum);
  });

  app.listen(8080)