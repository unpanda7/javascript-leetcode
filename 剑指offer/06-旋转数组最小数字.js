/**
 * 二分查招
 * @param {Array} rotateArray 
 */
function minNumberInRotateArray(rotateArray)
{
    // write code here
    let i = 0
    let j = rotateArray.length

    while(i < j) {
      m = Math.floor((i+j)/2) 
      if (rotateArray[m] > rotateArray[j]) {
        i = m + 1
      } else if (rotateArray[m] < rotateArray[j]) {
        j = m
      } else {
        j -= 1
      }
    }

    return rotateArray[i]
}