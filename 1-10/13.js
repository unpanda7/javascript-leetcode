/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  var result = 0
  s.split('').map((k, v, arr) => {
    var next = obj[arr[v + 1]]    
    var active = obj[arr[v]]    
    if (active < next) result -= active
    else result += active
  })
  return result
}
