/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let head, curr, n1, n2;
    if (list1.val <= list2.val) {
        curr = list1
        head = list1
        n1 = curr.next
        n2 = list2
    } else {
        curr = list2
        head = list2
        n2 = curr.next
        n1 = list1
    }

    while (n1 !== null && n2 !== null) {
        if (n1.val <= n2.val) {
            curr.next = n1
            curr = n1
            n1 = n1.next
        } else if (n1.val > n2.val) {
            curr.next = n2
            curr = n2
            n2 = n2.next
        }
    }

    if (n1 !== null) curr.next = n1
    else curr.next = n2
    return head
    // console.log(head)
};