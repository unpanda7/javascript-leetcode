/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length
  console.log("longestPalindrome -> len", len)
  
  if (len === 0 ) return s

  let res = 1
  let ll = 0
  let rr = 0
  // 奇数
  for(let i = 0; i < len; i++) {
    let l = i - 1
    let r = i + 1
    while (l >= 0 && r < len && s[l] === s[r]) {
      let lenT = (r - l + 1)
      if (lenT > res) {
        res = lenT
        ll = l 
        rr = r
      }
      l--
      r++
    }
    // 偶数
    l = i
    r = i + 1
    while(l >= 0 && r < len && s[l] === s[r]) {
      debugger
      let lenT = (r - l + 1)
      if (lenT > res) {
        res = lenT
        ll = l
        rr = r
      }
      l--
      r++
    }
  }
  return s.slice(ll, rr + 1)
};
longestPalindrome('bbbb')