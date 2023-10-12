/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function reverseHelper(s, k) {
    let l = s.next
    let r = l;
    for (let i = 0; i < k; i++) {
        if (r) {
        r = r.next;
        } else {
            return
        }
    }
    let curr = l, prev = r
    while(curr !== r) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    s.next = prev
}
var reverseKGroup = function(head, k) {
    let dummy = new ListNode();
    dummy.next = head
    let s = dummy;
    while(true) {
                console.log(s)
        reverseHelper(s, k)
                console.log(s)
        for (let i = 0; i < k; i++) {
            if (s.next) {
                s = s.next
            } else {
                console.log(s)
                return dummy.next
            }
        }
    }
};