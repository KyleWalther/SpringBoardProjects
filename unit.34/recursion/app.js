function count(){
    let n = 1;

    while (n <= 3){
        console.log(n);
        n += 1;
    }
}

count()


function count(n=1){
    if (n > 3) return;
    console.log(n);
    count(n + 1)
}

count()


function sum(nums) {
    if (nums.length === 0) return 0;
  
    return nums[0] + sum(nums.slice(1));
  }
  
  sum([1, 2, 4, 5]);


  function doubler(nums) {
    for (let n of nums) {
      if Array.isArray(n) {
        for (let o of nums) {
          if Array.isArray(o) {
            for (let p of o) console.log(p * 2);
          } else {
            console.log(o);
          }
        }
      } else {
        console.log(n * 2);
      }
    }
  }

  data = [ 1, [2, [3], 4], 5 ]  //   => 2 4 6 8 10

  function doubler(nums) {
    stack = nums.reverse();
  
    while (stack.length > 0) {
      let n = stack.pop();
      if Array.isArray(n) {
        // If array, add it to stack, reversed
        for (let inner of n.reverse() {
          stack.append(inner);
        }
      } else {
        console.log(n * 2);
      }
    }
  }


  
  const data = [1, [2, [3], 4], 5];

  function doubler(nums) {
    for (let n of nums) {
      if (Array.isArray(n)) {
        doubler(n); // Recursively call doubler for nested arrays
      } else {
        console.log(n * 2); // Double and print non-array numbers
      }
    }
  }
  
  doubler(data);













