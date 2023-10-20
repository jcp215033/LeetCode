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
var mergeKLists = function(lists) {
    
    function mergeLists(list1, list2){
        let dummy = new ListNode()
        let tail = dummy
        while (list1 && list2) {
            if (list1.val < list2.val) {
                tail.next = list1
                list1 = list1.next
            } else {
                tail.next = list2
                list2 = list2.next
            }
            tail = tail.next
        }
        if (list1) {
            tail.next = list1
        } else if (list2) {
            tail.next = list2
        }

        return dummy.next
    }
    
    function mergeSort(arr, l, r) {
        if (l === r) {
            return arr[l]
        }
        let m = Math.floor((l + r) / 2)
        let l1 = mergeSort(arr, l, m)
        let l2 = mergeSort(arr, m + 1, r)
        return mergeLists(l1, l2)

    }

    if (lists.length === 0) return null

    return mergeSort(lists, 0, lists.length - 1)

};