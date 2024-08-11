const {add, sub} = require('./addFile')
// const addFile = require('./addFile')

console.log(add(3,5))
console.log(sub(3,5))


const faker = require('faker')

console.log(faker.name.findName())

for(let arg of process.argv){
    console.log(arg)
}










