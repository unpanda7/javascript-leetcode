/**
 * Definition for singly-linked list.
 */
/**
 function ListNode(val) {
   this.val = val;
   this.next = null;
 }
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let currentNode = head, deleteNode = head, i = 0;
  while(i < n) { // 先走n步
      currentNode =  currentNode.next;
      i++;
  }
  if(!currentNode) return head.next // 
  while(currentNode.next) {
      currentNode = currentNode.next;
      deleteNode = deleteNode.next;
  }
  deleteNode.next = deleteNode.next.next; // 链表节点删除
  return head;  
};
