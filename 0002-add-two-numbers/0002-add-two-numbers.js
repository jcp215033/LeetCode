/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans = new ListNode(0);
    let head = ans
    let rem = 0;
    while (l1 || l2) {
        let node = rem;
        if (l1) {
            node += l1.val
            l1 = l1.next
        }
        if (l2) {
            node += l2.val
            l2 = l2.next
        } 
        ans.next = new ListNode(node % 10)
        rem = Math.floor(node / 10)
        ans = ans.next
    }
    if (rem > 0) ans.next = new ListNode(rem)
    return head.next
};