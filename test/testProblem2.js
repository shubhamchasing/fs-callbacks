const { readFile, convertToUpperCase, lowerCaseAndSplit, sortingOfData, removeNewFiles } = require('../problem2');

readFile('lipsum.txt', (err, data) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log('lipsum.txt has been read.')
        //console.log(data)
        convertToUpperCase('upperCase.txt', data, (upperCaseData) => {
            lowerCaseAndSplit('lowerCase.txt', upperCaseData, (lowerCaseData) => {
                sortingOfData('sort.txt', lowerCaseData, () => {
                    removeNewFiles(() => { })
                })
            })
        })

    }
})