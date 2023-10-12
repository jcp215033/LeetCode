/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let l = head, r = head;
    for (let i = 0; i < n; i++) {
        r = r.next
    }

    while (r && r.next) {
        l = l.next
        r = r.next
    }
    console.log(l)
    console.log(r)
    
    if (l.next && l.next.next && r) {
        console.log(1)
        l.next = l.next.next
        return head
    }
    else if (!l.next) {
        console.log(2)
        return null
    } else if (!l.next.next && n === 1) {
        console.log(3)
        l.next = null
        return head
    } else if (!l.next.next || l === head) {
        console.log(4)
        head = head.next
        return head
    } 
    return head
};