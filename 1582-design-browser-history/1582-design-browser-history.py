class Node:
    def __init__(self, val = 0, prev = None, next = None):
        self.val = val
        self.prev = prev
        self.next = next

class BrowserHistory:

    def __init__(self, homepage: str):
        self.home = Node(homepage, None)
        self.tail = Node(0, self.home)
        self.home.next = self.tail
        self.curr = self.home

    def visit(self, url: str) -> None:
        newVisit = Node(url, self.curr, self.tail)
        self.curr.next = newVisit
        self.tail.prev = newVisit
        self.curr = newVisit

    def back(self, steps: int) -> str:
        while self.curr and self.curr.prev and steps > 0:
            self.curr = self.curr.prev
            steps -= 1
        return self.curr.val

    def forward(self, steps: int) -> str:
        while self.curr and self.curr.next != self.tail and steps > 0:
            self.curr = self.curr.next
            steps -= 1
        return self.curr.val
        


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)