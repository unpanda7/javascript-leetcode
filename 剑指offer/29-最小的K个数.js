const leastQSort = (arr, k) => {
    if (arr.length === k) return arr;
    const left = [], right = [];
    const pivot = arr.pop();
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return left.length < k ? left.concat([pivot]).concat(leastQSort(right, k - left.length - 1)) : leastQSort(left, k); 
}

var getLeastNumbers = function(arr, k) {
    return leastQSort(arr, k);
};
