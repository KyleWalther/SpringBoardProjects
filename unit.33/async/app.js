const fs = require('fs')

// fs.readFile('poem.txt', 'utf8', (err, data) => {
//     if(err){
//         console.log('error')
//         process.kill(1)
//     }
//     console.log("DATA...", data)
// } )

// const line = "this is the line of text i am adding through writeFile"

// fs.writeFile('poem.txt', line, {encoding: 'utf8', flag: 'a'}, err =>
// {
//     if(err){
//         console.log(err)
//         process.kill(1)
//     }
//     console.log('it worked!')
// }
// )

const line = "this is the line of text i am adding through writeFile"

fs.appendFile('poem.txt', "\n APPEND ME!!!!!", 'utf8', err =>
{
    if(err){
        console.log(err)
        process.kill(1)
    }
    console.log('it worked!')
}
)


