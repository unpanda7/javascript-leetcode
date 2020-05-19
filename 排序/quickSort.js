const arr = [6, 10, 2, 1, 7, 4, 3, 5]

const quickSort = (arr) => {
  const pivot = arr[0] // 定基
  const left = []
  const right = []
  
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
  }
  
  return quickSort(left).concat([pivot], quickSort(right))
}
const re = quickSort(arr)
