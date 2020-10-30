const fs = require('fs');

fs.readFile('./hello.text', (err, data) => {
    if (err) {
        console.log('error')
    }
    console.log(data.toString())
})

const file = fs.readFileSync('./hello.text')
console.log(file.toString())

fs.appendFile('./hello.text', ' This is so cool!', err => {
    if (err) {
        console.log(err)
    }
})