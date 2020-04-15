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


function printListFromTailToHeadrecursion(head) {
  if (head === null || head.next === null) {
    return head
  }

  let ret = printListFromTailToHeadrecursion(head.next)

  head.next.next = head
  head.next = null
  return ret
}

function printListFromTailToHeadDouble(head) {
  if (head === null) return null;

  let cur = head

  while(head.next != null) {
    let t = head.next.next
    head.next.next = cur
    cur = head.next
    head.next = t
  }
  return cur
}