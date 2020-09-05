/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function recursion(node, arr) {
  if (!node) return;

  recursion(node.left, arr)
  arr.push(node.val)
  recursion(node.right, arr)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = []
  recursion(root, result)
  return result
};

// 非递归

var inorderTraversalUn = function(root) {
  const result = []
  const stack = [] // 维护进出顺序
  let node = root
  while(stack.length || node) {
    while(node) {
      stack.push(node)
      node = node.left  // 下沉 存数据
    }
    node = stack.pop() 
    result.push(node.val)
    node = node.right
  }
  return result
}
