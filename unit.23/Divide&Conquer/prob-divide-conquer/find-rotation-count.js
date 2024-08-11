function findRotationCount(arr) {
  let start = 0
  let end = arr.length -1;

    while (start <= end) {
        if (arr[start] <= arr[end]){
            return start
        }
        let mid = Math.floor((start + end) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid + arr.length - 1) % arr.length;


        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
    }
        if (arr[mid] <= arr[end]) {
        end = mid - 1;
        } else if (arr[mid] >= arr[start]) {
        start = mid + 1;
        }
    }
    return -1
}

// module.exports = findRotationCount