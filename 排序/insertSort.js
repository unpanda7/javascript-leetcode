const arr = [10, 2, 1, 7, 4, 3, 5]

function insertSort(arr) {
  for(let i = 1, len = arr.length; i < len; i++) {

    const temp = arr[i] // 要排序的元素

    let preIndex = i - 1 // 已经排好序的最后一个数组索引

    // 找到索引
    while(arr[preIndex] > temp) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex -= 1
    }

    // 交换位置
    arr[preIndex + 1] = temp
  }
  console.log('arr', arr)
  return arr
}

// insertSort(arr)

const binnarySearch = (arr, value) => {
  let min = 0
  let max = arr.length - 1

  while(min <= max) {
    const mid = Math.floor(min + max) / 2

    if (arr[mid] === value) {
      return mid
    } else if (arr[mid] > value) {
      max = mid - 1
    } else {
      min = min + 1
    }
  }

  return 'Not Found'
}