/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    if (list1 !== null) tail.next = list1
    else tail.next = list2
    return dummy.next
};

var mergeKLists = function(lists) {
    
    while(lists.length > 1) {
        lists.push(mergeTwoLists(lists.pop(), lists.pop()))
    }
    return lists[0] || null
};