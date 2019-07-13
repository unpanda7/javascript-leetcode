/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return parseInt(x.toString().split('').reverse().join('')) === x
};

// 第二种解法 栈
var isPalindrome = function(x) {
  const stack = []
  let arr = x.toString().split('')
  for(let i = arr.length - 1; i > 0; i--) {
    stack.push(arr[i])
  }
  return parseInt(stack.join('')) === x
};