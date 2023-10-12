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
        let node = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rem
        l1 = l1 && l1.next ? l1.next : null
        l2 = l2 && l2.next ? l2.next : null
        ans.next = new ListNode(node % 10)
        rem = (node / 10) >> 0
        ans = ans.next
    }
    if (rem > 0) ans.next = new ListNode(rem)
    return head.next
};