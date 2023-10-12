# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
      l, r = head, head
      while r and r.next:
        l = l.next
        r = r.next.next
      
      curr, prev = l, None
      while curr:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      
      while prev:
        if head.val == prev.val:
          head = head.next
          prev = prev.next
        else:
          return False
      
      return True
        