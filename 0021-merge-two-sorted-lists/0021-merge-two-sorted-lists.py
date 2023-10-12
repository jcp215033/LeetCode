# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 == None: return list2
        if list2 == None: return list1

        if list1.val <= list2.val:
            curr = list1
            head = list1
            n1 = curr.next
            n2 = list2
        else:
            curr = list2
            head = list2
            n2 = curr.next
            n1 = list1
        
        while n1 != None and n2 != None:
            if n1.val <= n2.val:
                curr.next = n1
                curr = n1
                n1 = n1.next
            else:
                curr.next = n2
                curr = n2
                n2 = n2.next
        
        if n1 != None: curr.next = n1
        else: curr.next = n2

        return head
        