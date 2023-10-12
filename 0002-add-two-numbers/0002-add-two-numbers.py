# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        ans = ListNode()
        dummy = ans
        rem = 0
        while l1 or l2:
            if l1 and l2:
                node = l1.val + l2.val + rem
                l1 = l1.next
                l2 = l2.next
            elif l1:
                node = l1.val + rem
                l1 = l1.next
            else:
                node = l2.val + rem
                l2 = l2.next
            dummy.next = ListNode(node % 10)
            dummy = dummy.next
            rem = int(node / 10)
        if rem > 0: dummy.next = ListNode(rem)
        return ans.next
    
        