/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length) return ''
  let re = strs[0]
  for(let i = 0; i < strs.length; i++) {
    let j = 0;
    for(; j < re.length && str[i].length; j++) {
      if (re[j] !== str[i][j]) break
    }
    let re = re.substr(0, j)
    if (re === '') return re
  }
  return re
}
