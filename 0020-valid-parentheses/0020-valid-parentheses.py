class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for p in s:
            if p == '(' or p == '{' or p == '[':
                stack.append(p)
            elif stack and ((p == ')' and stack[-1] == '(') or (p == '}' and stack[-1] == '{') or (p == ']' and stack[-1] == '[')):
                stack.pop()
            else:
                return False
        return False if stack else True
        