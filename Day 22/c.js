var http = require('http');
var fs = require('fs');
var path = require('path')

http.createServer(function(req, res){
    console.log(req.url);
     if(req.url === '/') {
         //res.whitehead
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if (req.url)  {
        fs.createReadStream(__dirname + '/flowershop/' + req.url).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    } 

}).listen(7070, '127.0.0.1');