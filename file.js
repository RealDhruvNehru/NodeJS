const file = require('fs')
const os = require('os')

// file.writeFileSync('./test.txt', 'Hey there file 1')

// file.writeFile('./file2.txt' , 'Hey there file 2', (err)=>{})

const result = file.readFileSync('./contacts.txt', 'utf-8')
console.log(result)

const testing = file.readFileSync('./test.txt', 'utf-8', (err, testing)=>{
    if (err){
    console.log(err)}
    else 
        console.log(console.log(testing))

})

console.log(os.cpus().length)