/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = []
  const stack = []
  let node = root
  while(stack.length || node) {
    while(node) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    node = node.right
  }
  return result
};