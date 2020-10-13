/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 三个指针 前节点 当前节点 后一个节点
function ReverseList(pHead)
{
    // write code here
  let preNode = null,
    nextNode = null
  while(pHead) {
    nextNode = pHead.next
    pHead.next = preNode
    preNode = pHead
    pHead = nextNode
  }

  return pHead
}