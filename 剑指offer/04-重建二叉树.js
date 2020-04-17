/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if (pre.length === 0) return null;

    if (vin.length === 0) return null;

    const value = pre[0] // root value
    const index = vin.indexOf(value)
    const vinLeft = vin.slice(0, index)
    const vinRight = vin.slice(index + 1)
    const preLeft = pre.slice(1, index + 1)
    const preRight = pre.slice(index + 1)
    const node = new TreeNode(value)
    node.left = reConstructBinaryTree(preLeft, vinLeft) 
    node.right = reConstructBinaryTree(preRight, vinRight)
    return node
}