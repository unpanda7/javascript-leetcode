/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0
  let r = x
  let ans = -1
  while (l <= r) {
    let mid = Math.round((l + r) / 2)
    let p = mid * mid
    if (p === x) {
      return mid
    }

    if (p > x) {
      r = mid -1
    } else {
      l = mid + 1
      ans = mid
    }
  }

  return ans 
};