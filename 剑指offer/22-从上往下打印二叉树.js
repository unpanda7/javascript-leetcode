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
var levelOrder = function(root) {
  const queue = [],
    res = []
  if (root == null) {
    return res
  }

  // 推进第一个节点
  queue.push(root)
  while(queue.length) {
    const pRoot = queue.shift()
    if (pRoot.left) {
      queue.push(pRoot.left)
    }
    if (pRoot.right) {
      queue.push(pRoot.right)
    }
    res.push(pRoot.val)
  }
  return res
  
};