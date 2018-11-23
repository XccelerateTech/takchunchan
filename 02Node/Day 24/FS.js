const fs = require('fs');


function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function showStat(file) {
    return new Promise((resolve, reject) => {
        fs.stat (file, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

module.exports = {
    readdir: readdir,
    showStat: showStat
}