/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gIdx = 0, sIdx = 0,res = 0
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  while(gIdx < g.length && sIdx < s.length) {
    if (g[gIdx] <= s[sIdx]) {
      res++
      gIdx++
    }
    sIdx++
  }
  return res
};