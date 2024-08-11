// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// part 1
const newFilterOutOdds = (...args) => args.filter(v => v % 2 === 0)

// part 2
const findMin = (...args) => 
   Math.min(...args);

const newMin = function(...args){
    return Math.min(...args)
}

// part 3
const mergeObjects = (object1, object2) => ({...object1, ...object2});

const mergeObj = function(obj1, obj2) {
    return {...obj1, ...obj2}
}

// part 4
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

// part 5
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
const randomIndex = Math.floor(Math.random() * items.length)
const newArray = [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)]
return newArray

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
return [...array1, ...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
const newObject = {...obj, [key]: val}
return newObject
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
let newObj = {...obj}
delete newObj[key]
return newObj
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let newObject = {...obj}
newObject[key] = val
return newObject
}





