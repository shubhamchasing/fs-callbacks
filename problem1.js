const fs = require('fs');


const mkdir = (dir, callback) => {
    let path = __dirname + '/' + dir
    fs.mkdir( path,{recursive : true}, callback)  

}

const writeFile = (file, data ,callback) => {

    fs.writeFile(file,data,callback)
    
}

const unlink = (file, callback) =>{
    fs.unlink(file, callback)
}

module.exports.mkdir = mkdir;
module.exports.writeFile = writeFile;
module.exports.unlink = unlink;