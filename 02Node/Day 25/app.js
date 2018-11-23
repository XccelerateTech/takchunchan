const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var readFile = require('./FS.js').readFile
var writeFile = require('./FS.js').writeFile
const path = require('path')
// var mv = require('mv');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(fileUpload());

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index');
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/fileupload',(req,res)=>{
      let theFile = req.files.theFile
    console.log(theFile);
    theFile.mv(__dirname + '/dropbox/name.jpg')
	res.send("fileupload Information Received.");
});



app.listen(8080);