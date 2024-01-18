// Object destructuring 1
8
1846


// Object destructuring 2
const answer = { yearNeptuneDiscovered: 1846,
yearMarsDiscovered: 1659}


// Object destructuring 3
getUserData = 'Your name is Alejandro and you like purple'
getUserData = 'Your name is Mellisa and you like green'
getUserData = 'Your name is undefined and you like green'


// Array destructuring 1
"Maya"
"Marisa"
"Chi"


// Array destructuring 2
"Raindrops on roses"

"whiskers on kittens"

"Bright copper kettles",
"warm woolen mittens",
"Brown paper packages tied up with strings"


// Array destructuring 3
[10,30,20]


// ES 2015 Object destructuring
const {a,b} = obj


// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]];


// raceResults
const raceResultNames = (['Kyle','Behliu','Mike','Jesse','Tom'])
const raceResults = ([first,second,third,...rest]) => ({first, second, third, rest})
// what the object would look like
const final = {
    first: 'Kyle',
    second: 'Behliu',
    third: 'Mike',
    rest: ['Jesse','Tom']
 }























