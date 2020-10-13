/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 栈
function FindKthToTail(head, k) {
  // write code here
  let stack = []
  let ans = []
  while(head) {
    stack.push(head)
    head = head.next
  }

  while(k > 0) {
    ans = stack.pop()
    k--
  }

  return ans
}

// 双指针
function FindKthToTailD(head, k) {
  let p = head, q = head
  while(p) {
    if (k > 0) {
      p = p.next
      k--
    } else {
      p = p.next
      q = p.next
    }
  }
  return q
}
