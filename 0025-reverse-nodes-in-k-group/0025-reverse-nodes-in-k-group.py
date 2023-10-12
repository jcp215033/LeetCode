# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseHelper(self, s: ListNode, k: int):
        l = s.next
        r = l
        for _ in range(k):
            if r:
                r = r.next
            else:
                return
        
        curr, prev = l, r
        while curr != r:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        s.next = prev

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = ListNode()
        dummy.next = head
        s = dummy
        while True:
            self.reverseHelper(s, k)
            for _ in range(k):
                if s.next:
                    s = s.next
                else:
                    return dummy.next

        