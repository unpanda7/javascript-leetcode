/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  const result = []
  const stack = []
  let node = root
  while(stack.length || node) {
    while(node) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    result.push(node.val)
    node = node.right
  }
  for(let i = 1; i < result.length; i++) {
    if (result[i] <= result[i - 1]) return false
  }
  return true
};