// longestSubstringWithoutRepeatingCharacters

// Given a string, find the length of the longest substring without repeating characters.

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @description: 
 * @param {string} s
 * @returns {number}
 */
const maxLengthStr = (s) => {
  let res = 0;
  const mapHash = {}; // 记录已经出现过的字符串
  let slidingWindow = []

  for (let c of s) {
    if(mapHash[c]) { // 已经出现过了，删除
      const delIndex = slidingWindow.findIndex(_c => _c === c)

      for (let i = 0; i < delIndex; i++) {
        mapHash[slidingWindow[i]] = false
      }

      slidingWindow = slidingWindow.slice(delIndex + 1).concat(c)
    } else {
      // 新字符
      if(slidingWindow.push(c) > res) {
        res = slidingWindow.length
      }
    }
    mapHash[c] = true
  }
  return res;
}

const str = 'abcabcaa';

const re = maxLengthStr(str);
