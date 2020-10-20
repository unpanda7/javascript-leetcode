/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = []
  function traverse(root, val, valArr) {
    if (!root) return 
    if (root) {
      val += root.val
      valArr.push(root.val)
      if (val === sum && !root.left && !root.right) {
        res.push(valArr)
        return
      }
      traverse(root.left, val, [...valArr])
      traverse(root.right, val, [...valArr])
    }
  }
  traverse(root, 0, [])
  return res
}
