const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];



function unroll(squareArray) {
const result = []
if (squareArray.length === 0 || !squareArray[0]) {
    return result;
  }


let top = 0
// top is the index of the first row as it is the first array of our group of arrays (value is 0)
let bottom = squareArray.length -1 
// 'bottom' represents the index of the last row in the 2D array (square). 
// The length of the array gives the total number of rows (which is 4 in this example).
// Since arrays are zero-indexed, meaning the first element is at index 0, 
// we subtract 1 to get the index of the last row.
// In this example, squareArray.length = 4, so bottom = 4 - 1 = 3.
let left = 0
// left is the index of the first column in the group of arrays (value is 0)
let right = squareArray[0].length - 1
// right grabs the first array in the length or collectino of arrays and eners it to find the last value in that array by using the -1 indexing method again (the value is 3)



while (top <= bottom && left <= right) {
    // while the top value (0) is less than bottom (3) and while left (0) is less or equla to right (3) we perform these loops

    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
        result.push(squareArray[top][i]);
        // as we travers through the numbers by index within our array, we are pushing the value of i into result (1,2,3,4 in this exmaple) and adding one to top as to select the next row in our array colenction to now be the highest point
    }
    top++;

    // Traverse from top to bottom along the right column
    for (let i = top; i <= bottom; i++) {
        result.push(squareArray[i][right]);
        // As we traverse through this loop, we are pushing values from the rightmost column in the current boundary. The result.push(squareArray[i][right]) statement grabs the value from each row at the index right (which initially is 3) as we iterate from the top boundary down to the bottom. Once this traversal completes (i.e., after the loop has gone through all rows from top to bottom), we decrement right (right--). This effectively moves the right boundary one column to the left, making a new "right side" for the next phase of the spiral traversal.
    }
    right--;

    // Traverse from right to left along the bottom row, if applicable
    if (top <= bottom) {
        for (let i = right; i >= left; i--) {
            result.push(squareArray[bottom][i]);
        }

        bottom--;
    }

    // Traverse from bottom to top along the left column, if applicable
    if (left <= right) {
        for (let i = bottom; i >= top; i--) {
            result.push(squareArray[i][left]);
        }
        left++;
    }
}

return result;
}


module.exports = unroll;
