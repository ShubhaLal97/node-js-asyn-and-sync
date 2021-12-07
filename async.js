//synchronous version

const fs = require('fs')

//const data = fs.readFileSync('name.txt','utf-8') 
//console.log(data)

//asynchronous version

fs.readFile('name.txt','utf-8', (err,data) => {
    console.log(data)
})
console.log('after the data')