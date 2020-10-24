/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0
  for(let i = 1; i < prices.length; i++) {
      let temp = prices[i] - prices[i - 1]
      if (temp > 0) sum += temp
  }
  return  sum
};