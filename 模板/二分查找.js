function binarySearch(arr, n, target) {
  let l = 0
  let r = n - 1
  while(l < r) {
    let mid = Math.round((l + r) / 2)

    if (arr[mid] === target) {
      return arr[mid]
    }

    if (target > arr[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
}