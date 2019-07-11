/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  let result = [];
  for (var i = 0, len = nums.length; i < len; i++) {
    for (var j = 1, jLen = len - i - 1; j < jLen; j++) {
      if (target - nums[i] == nums[j]) {
        // result.push(i, j);
        // return result;
        console.log(i, j);
      }
    }
  }
};

twoSum([2, 7, 11, 15], 9);