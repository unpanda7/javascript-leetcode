/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var result = []
    if (!head) return []
    while (head.next) {
        result.unshift(head.val)
        head = head.next
    }
    result.unshift(head.val)
    return result
}