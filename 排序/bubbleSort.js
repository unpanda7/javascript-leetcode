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


// 利用缓存
const bubbleSortPos = arr => {
  let i = arr.length - 1

  while(i > 0) {
    let pos = 0

    for(let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        pos = j
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
    i = pos
  }

  console.log('arr', arr);
  return arr
}


bubbleSortPos(arr)
