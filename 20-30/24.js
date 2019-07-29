/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let node = new ListNode(0);
  node.next = head

  let p = node
  while(p.next && p.next.next) {
    let node1 = p.next
    let node2 = node1.next
    let next = node2.next
    node2.next = node1
    node1.next = next
    // 移动flag
    p.next = node2
    p = node1
  }

  let last = node.next
  delete node

  return last
}
