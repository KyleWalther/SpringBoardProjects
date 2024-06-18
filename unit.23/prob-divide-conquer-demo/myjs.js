let array1 = [10,4,5,2,7,23,15]

let sortedArray = array1.sort((a,b) => a - b);
//  this organizes an array from least to greatest allowing for the binary funciton to work properly


function binarySearch(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    // this will be our loo which checks our array until it finds our value
    while (leftIdx <= rightIdx){
        let middleIdX = Math.floor((leftIdx + rightIdx) /2)
        let middleVal = arr[middleIdX];
        if (middleVal < val){
            leftIdx = middleIdX + 1
        } else if (middleVal > val){
            rightIdx = middleIdX -1;
        } else {
            return middleIdX
        }
    }
    return -1
}


