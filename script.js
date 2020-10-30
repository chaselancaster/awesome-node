const fs = require('fs');

fs.readFile('./hello.text', (err, data) => {
    if (err) {
        console.log('error')
    }
    console.log(data.toString())
})

const file = fs.readFileSync('./hello.text')
console.log(file.toString())

// APPEND
// fs.appendFile('./hello.text', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// WRITE
fs.writeFile('bye.text', 'Sad to see you go.', err => {
    if (err) {
        console.log(err)
    }
})




