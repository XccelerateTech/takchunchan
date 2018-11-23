var readdir = require('./FS.js').readdir
var showStat = require('./FS.js').showStat

var checkDirOrFile = (path) => {
    readdir(path).then((res) => {
        res.forEach(function(file){
            showStat(path+'/'+file)
            .then((res)=>{
                if (res.isDirectory()){
                    console.log(path + '/' + file + ' is Directory: ' + res.isDirectory())
                    var newTest = path + '/' + file
                    return checkDirOrFile(newTest)
                } else {
                    console.log(path + '/' + file + ' is Directory: ' + res.isDirectory())
                }
            })
        })
    }
    )
}

checkDirOrFile('./files')