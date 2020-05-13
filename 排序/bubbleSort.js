const arr = [10, 2, 1, 7, 4, 3, 5]
const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      }
    }
  }
  console.log('冒泡排序结果：', arr)
}

// bubbleSort(arr)


