/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {

  const len = postorder.length
  if (len < 2) return true
  // 获取根节点
  const root = postorder[len - 1]
  const idx = postorder.findIndex(item => item > root)
  const left = postorder.slice(0, idx)
  const right = postorder.slice(idx, -1)
  if (Math.min(root, ...right) !== root) return false

  return verifyPostorder(left) && verifyPostorder(right)
};

