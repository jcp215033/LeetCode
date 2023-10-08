class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for p in s:
            if p == '(' or p == '{' or p == '[':
                stack.append(p)
            elif len(stack) > 0 and ((p == ')' and stack[-1] == '(') or (p == '}' and stack[-1] == '{') or (p == ']' and stack[-1] == '[')):
                stack.pop()
            else:
                return False
        return False if len(stack) > 0 else True
        