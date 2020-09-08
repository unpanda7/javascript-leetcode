/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []

  const res = []
  const queue = [root]
  let temp = []
  while(queue.length) {
    const len = queue.length
    for(let i = 0; i < len; i++) {
      const node = queue.shift() // 先进先出
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(temp)
    temp = []
  }
  return res
};