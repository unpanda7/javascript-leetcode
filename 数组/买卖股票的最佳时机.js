/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER, max = 0
  for (const value of prices) {
    min = Math.min(min, value)
    max = Math.max(max, value - min)
  }
  return max
}