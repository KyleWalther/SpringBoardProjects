// Simplify the following big O expressions as much as possible:

O(n)
O(n)
O(1)
O(n^3)
O(n)
O(n)
// O(n log n)
O(2^n)
O(1)
O(n^2)

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
O(n)

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
  O(n)

  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  O(n)

  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
  O(n^2)

  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
  O(n)


//   ## **Part 3 - short answer**

true
false - true
false
O(n)
O(n)
O(n)
// O(n log n)
O(n)
O(1)
O(n)
O(1)
O(n)
O(n)




