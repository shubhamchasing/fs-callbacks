const fs = require('fs');
const path = require('path');

const readFile = ( file, callback) => {
    fs.readFile(path.join(__dirname,file), 'utf8', callback)
}

const convertToUpperCase = (newFile, data, callback) => {
    //console.log(data)
    const upperCaseData = (data).toUpperCase()
    fs.writeFile(path.join(__dirname,newFile), upperCaseData, (err) => {
        if (err) {
            console.error(err)

        }
        else {
            console.log(`${newFile} has been created.`)
            fs.appendFile(path.join(__dirname,'filenames.txt'), newFile + '\n', (err) => {
                if (err) {
                    console.error(err)
                }
                else {
                    console.log(`${newFile} name has been added to filenames.txt`)
                    callback(upperCaseData)
                }
            })
        }
    })

}

const lowerCaseAndSplit = (newFile, data, callback) => {
    const lowerCaseData = data.toLowerCase().replaceAll('. ', '\n');
    fs.writeFile(path.join(__dirname,newFile), data, (err) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(`${newFile} has been created.`)
            fs.appendFile(path.join(__dirname,'filenames.txt'), newFile + '\n', (err) => {
                if (err) {
                    console.error(err)
                }
                else {
                    console.log(`${newFile} name has been added to filenames.txt`)
                    callback(lowerCaseData)
                }
            })
        }
    })
}

const sortingOfData = (newFile, data, callback) => {
    const newData = data.split('\n').sort().join('\n')
    fs.writeFile(path.join(__dirname,newFile), newData, (err) => {
        if (err) {
            console.error(err)
        }
        else {
            console.log(`${newFile} has been created.`)
            fs.appendFile(path.join(__dirname,'filenames.txt'), newFile + '\n', (err) => {
                if (err) {
                    console.error(err)
                }
                else {
                    console.log(`${newFile} name has been added to filenames.txt`)
                    callback()
                }
            })

        }
    })
}

const removeNewFiles = () => { 
    fs.readFile(path.join(__dirname,'filenames.txt'),'utf8', (err,data)=>{
        if (err){
            console.error(err)
        }

        else{
            let splitData = data.split('\n')
            splitData.forEach(file => {
                if(file !== ''){
            fs.unlink(path.join(__dirname,file), (err)=>{
                if (err){
                    console.error(err)
                }
                else{
                    console.log(`${file} has been deleted.`)
                    
                }
            })}
                
            });
        }
    })
}

module.exports.readFile = readFile;
module.exports.convertToUpperCase = convertToUpperCase;
module.exports.lowerCaseAndSplit = lowerCaseAndSplit;
module.exports.sortingOfData = sortingOfData;
module.exports.removeNewFiles = removeNewFiles;