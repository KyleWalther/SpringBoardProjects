// quick question one
{1, 2, 3, 4}

// Quick question 2
"refee"

// Quick question 3

// 0: {Array(3) => true}
// 1: {Array(3) => false}

// has duplicate
let hasDupe = (arr) => {
const newSet = new Set()
for (const values of arr ){
    if (newSet.has(values)){
        return true
    }
}
return false
}


// vowelcount
const vowelCount = (word) => {
const vowels = "aeiou";
const vowelMap = new Map()

for (let char of word) {
    if (vowels.includes(char)) {
        vowelMap.set(char = (vowelMap.get(char) || 0) +1)
    }
}

return vowelMap
}









