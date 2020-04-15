/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let cur = null
    let pre = head
    while(head !== null) {
      let t = pre.next
      pre.next = cur
      cur = pre
      pre = t
    }

    return cur
}