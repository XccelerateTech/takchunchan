var fs = require('fs');

var readable = fs.createReadStream('kyrie.txt');

readable.on('data', function(b){
    console.log(b.length);
});