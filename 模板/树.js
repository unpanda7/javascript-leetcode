// 前序遍历

const preDfs = root => {
  const result = []
  const dfs = node => {
    if (node) {
      dfs(node.left)
      dfs(node.right)
      result.push(node.val)
    }
  }
  preDfs(root)
  return result
}