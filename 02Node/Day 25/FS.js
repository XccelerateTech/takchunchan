const fs = require('fs');

function readFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function writeFile(file) {
    return new Promise((resolve, reject) => {
        fs.writeFile (file, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports = {
    readFile: readFile,
    writeFile: writeFile
}