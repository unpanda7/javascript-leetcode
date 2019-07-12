/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  Math.abs(x) > 2 ** 31 - 1 ? (x = 0) : x
  if (x == 0) return 0
  let y = Math.abs(x).toString(),
    len = ''
  for (var i = 0; i < y.length; i++) {
    len += y[y.length - i - 1]
  }
  return parseInt(Math.abs(len) > 2 ** 31 - 1 ? (len = 0) : x < 0 ? -len : len)
}
