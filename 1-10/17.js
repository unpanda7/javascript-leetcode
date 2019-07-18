/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let result = []
  let hash = {
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
  }
  function backtrack(conbination, next_digits) {    
    if (next_digits.length === 0)
      result.push(conbination)
    else {
      for(let i = 0; i < hash[next_digits[0]].length; i++) {
        console.log(i);
        
        backtrack(conbination + hash[next_digits[0]][i], next_digits.slice(1))
      }
    }
  }
  if (digits) {
    backtrack("", digits)
  }
  return result
};


console.log(letterCombinations('234'));
