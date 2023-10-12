/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let l = head, r = head;
    while (r && r.next) {
      l = l.next
      r = r.next.next
    }

    let curr = l, prev = null
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    
    while (prev) {
      if (prev.val === head.val) {
        prev = prev.next
        head = head.next
      } else {
        return false
      }
    }
    return true
};