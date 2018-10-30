var http = require('http');
var fs = require('fs');
var path = require('path')

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/flowershop/index.html').pipe(res);
    } else if (req.url !== '/favicon.ico' )  {
        fs.createReadStream(__dirname + '/flowershop/' + req.url).pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    } 

}).listen(8080, '127.0.0.1');