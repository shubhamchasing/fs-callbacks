const { mkdir, writeFile, unlink } = require('../problem1');

let dir = 'random'

const counter = (files) => {

    if (files.length === 3) {
        files.forEach(path => {
            unlink(path, (err) => {
                if (err) {
                    console.error(err)
                }
                else {
                    let file = path.split('/').slice(-1)
                    console.log(`${file} has been deleted.`)
                }
            })

        });

    }
}

mkdir(dir, (err, path) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log(`${dir} directory has been created.`)
        let files = []
        let file = Math.random().toString(36).substring(2) + '.json'
        let fullPath = path + '/' + file

        writeFile(fullPath, '{"hello" : "async"}', (err) => {
            if (err) {
                console.error(err)
            }
            else {
                console.log(`${file} has been created.`)

                files.push(fullPath)

                let file2 = Math.random().toString(36).substring(2) + '.json'
                let fullPath2 = path + '/' + file2
                writeFile(fullPath2, '{"hello" : "async"}', (err) => {
                    if (err) {
                        console.error(err)
                    }
                    else {
                        console.log(`${file2} has been created.`)
                        files.push(fullPath2)

                        let file3 = Math.random().toString(36).substring(2) + '.json'
                        let fullPath3 = path + '/' + file3
                        writeFile(fullPath3, '{"hello" : "async"}', (err) => {
                            if (err) {
                                console.error(err)
                            }
                            else {
                                console.log(`${file3} has been created.`)
                                files.push(fullPath3)

                                counter(files)


                            }
                        })
                    }
                })
            }
        })
    }
})
