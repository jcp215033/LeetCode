class Node:
    
    def __init__ (self, val = 0, prev = None, next = None):
        self.val = val
        self.prev = prev
        self.next = next

class MyLinkedList:

    def __init__(self):
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, index: int) -> int:
        curr = self.head.next
        while curr and index > 0:
            curr = curr.next
            index -= 1
        if curr and curr != self.tail and index == 0:
            return curr.val
        else:
            return -1

    def addAtHead(self, val: int) -> None:
        newHead = Node(val, self.head, self.head.next)
        self.head.next.prev = newHead
        self.head.next = newHead

    def addAtTail(self, val: int) -> None:
        newTail = Node(val, self.tail.prev, self.tail)
        self.tail.prev.next = newTail
        self.tail.prev = newTail

    def addAtIndex(self, index: int, val: int) -> None:
        curr = self.head.next
        while curr and index > 0:
            curr = curr.next
            index -= 1
        if curr and index == 0:
            newNode = Node(val, curr.prev, curr)
            curr.prev.next = newNode
            curr.prev = newNode

    def deleteAtIndex(self, index: int) -> None:
        curr = self.head.next
        while curr and index > 0:
            curr = curr.next
            index -= 1
        if curr and curr != self.tail and index == 0:
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)