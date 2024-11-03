function merge(arr1, arr2) {
    const results = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    // these lines run so that we add the remaing values in an array if the length of the two arrays is differnet 
    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while(i < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}




// this function will split an array into smaller arrays then call the merge on the arrays to add them innto a new array
function mergeSort(arr) {
    // base case
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid))
    const right = mergeSort(arr.slice(mid))
}

module.exports = { merge, mergeSort};



// we will make a result array, make starting points of array a and array b. a and b are comparing each value of the first indexes and adding the smaller or larger one to the new array as it compares



