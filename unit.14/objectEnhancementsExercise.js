// same keys and values
function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

// computed property names
let favNumber = 42

const instructor = {

    firstName : 'colt',
    [favNumber] : 'this is my favorite number!'

}

// object methods
const instructorObj = {
    firstName : 'Colt',
    sayHi(){
        return "hi!"
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
}

const animalObj = function(species, verb, noise){
    return {
        species,
        [verb](){
        return noise
        }
    }
    
}






