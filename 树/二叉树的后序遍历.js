var postorderTraversal = function(root) {
  const res = []
  const stack = []
  while(root || stack.length) {
    // 先遍历左节点
    if (root.left) {
      stack.push(root)
      root = root.left
    } else if (root.right) {
      stack.push(root)
      root = root.right
    } else {
      res.push(root.val)
      root = stack.pop()
      if (root && root.left) root.left = null
      else if (root && root.right) root.right = null
    }
  }
  return res
}