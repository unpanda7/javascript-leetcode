/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length
  if (len === 0 || strs[0].length === '') return ''
  let base = strs[0]
  for (let i = 1; i < strs.length; i++) {
    const element = strs[i]
    while (!element.includes(base)) {
      // update base
      base = base.slice(0, -1)
      // condition
      if (!base) return ''
    }
  }
  console.log('arr', base);
  return base
}

// let arr = ["flower","flow","flight"]
// longestCommonPrefix(arr)