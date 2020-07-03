/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const len = nums.length
  if (len === 0) return null
  else if (len === 1) return new TreeNode(nums[0]) 
  let mid = Math.floor(len / 2)
  let tree = new TreeNode(nums[mid])
  tree.left = sortedArrayToBST(nums.slice(0, mid))
  tree.right = sortedArrayToBST(nums.slice(mid + 1))
  return tree
};