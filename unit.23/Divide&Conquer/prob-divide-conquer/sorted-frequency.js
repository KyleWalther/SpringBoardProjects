function sortedFrequency(arr, val) {
    let occurence = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val)
            occurence ++
    }
    return occurence
}

// module.exports = sortedFrequency