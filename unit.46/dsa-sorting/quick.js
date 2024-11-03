/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/
function pivot(arr, start = 0, end = arr.length - 1) {
    // We’ll use the first element as the pivot
    let pivotValue = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            // Swap current element with element at swapIndex
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }

    // Place pivot in its correct position
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    // Return the index of the pivot element
    return swapIndex;
}

/*
quickSort accepts an array, left index, and right index
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Get the pivot index
        let pivotIndex = pivot(arr, left, right);

        // Recursively apply quickSort to left and right partitions
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    // Return the sorted array
    return arr;
}


module.exports = quickSort;