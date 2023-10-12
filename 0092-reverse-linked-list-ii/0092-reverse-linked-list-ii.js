/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode()
    dummy.next = head
    let s = dummy, l = s.next, r = l
    for (let i = 0; i < left - 1; i++) {
        s = s.next
        l = l.next
    }
    for (let i = 0; i < right; i++) {
        r = r.next
    }
    console.log(s, l, r)
    let curr = l, prev = r
    while (curr !== r) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    s.next = prev
    return dummy.next
};