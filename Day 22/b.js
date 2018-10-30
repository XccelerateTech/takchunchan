var fs = require('fs');

var readable = fs.createReadStream('kyrie.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream('output/textcopy.txt');

readable.pipe(writeable);