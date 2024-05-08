function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    // Perform binary search
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If arr[mid] is equal to x, it is the floor of x
        if (arr[mid] === x) {
            return arr[mid];
        }
        // If arr[mid] is less than x, update floor and search right side
        else if (arr[mid] < x) {
            floor = arr[mid];
            start = mid + 1;
        }
        // If arr[mid] is greater than x, search left side
        else {
            end = mid - 1;
        }
    }

    return floor;

}

// module.exports = findFloor