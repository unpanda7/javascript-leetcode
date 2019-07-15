/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
mapping = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1,'I'],
]
  let re = '';
  let flag = true
  mapping.forEach(item => {
    if (num >= item[0] && flag) {
      flag = false
      re = repeat(Math.floor(num / item[0]), item[1]) + intToRoman(num % item[0])
    }
  })
  return re
}

function repeat(n, result) {
  let re = '';
  for(let i = 0; i < n; i++) {
    re += result
  }
  
  return re
}

console.log(intToRoman(58))