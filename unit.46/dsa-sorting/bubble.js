function bubbleSort(arr) {
    for(let j = 0; j < arr.length; j++) {
        for(let i = 0; i < arr.length - 1 - j; i++) { // Adjust inner loop
            if(arr[i] > arr[i+1]) {
                // Swap the values
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        console.log(arr); // Check the array at each pass
    }
    return arr; // Return the sorted array
}

module.exports = bubbleSort;