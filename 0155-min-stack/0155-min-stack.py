class MinStack:

    def __init__(self):
        self.stack = []
        self.iStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if self.iStack:
            if val <= self.stack[self.iStack[-1]]:
                self.iStack.append(len(self.stack) - 1)
            else:
                self.iStack.append(self.iStack[-1])
        else:
            self.iStack.append(0)

    def pop(self) -> None:
        self.stack.pop()
        self.iStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.stack[self.iStack[-1]]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()