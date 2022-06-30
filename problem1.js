const fs = require('fs');
const path = require('path');

const mkdir = (dir, callback) => {
    
    fs.mkdir( path.join(__dirname,dir),{recursive : true}, callback)  

}

const writeFile = (file, data ,callback) => {

    fs.writeFile(path.join(__dirname,file),data,callback)
    
}

const unlink = (file, callback) =>{
    fs.unlink(path.join(__dirname,file), callback)
}

module.exports.mkdir = mkdir;
module.exports.writeFile = writeFile;
module.exports.unlink = unlink;