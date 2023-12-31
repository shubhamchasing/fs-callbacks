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

        writeFile(file, '{"hello" : "async"}', (err) => {
            if (err) {
                console.error(err)
            }
            else {
                console.log(`${file} has been created.`)

                files.push(file)

                let file2 = Math.random().toString(36).substring(2) + '.json'
                
                writeFile(file2, '{"hello" : "async"}', (err) => {
                    if (err) {
                        console.error(err)
                    }
                    else {
                        console.log(`${file2} has been created.`)
                        files.push(file2)

                        let file3 = Math.random().toString(36).substring(2) + '.json'
                        
                        writeFile(file3, '{"hello" : "async"}', (err) => {
                            if (err) {
                                console.error(err)
                            }
                            else {
                                console.log(`${file3} has been created.`)
                                files.push(file3)

                                counter(files)


                            }
                        })
                    }
                })
            }
        })
    }
})
