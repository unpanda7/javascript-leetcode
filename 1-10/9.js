/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return parseInt(x.toString().split('').reverse().join('')) === x
};