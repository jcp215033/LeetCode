class Solution:
    def calPoints(self, operations: List[str]) -> int:
        ans = []
        for i in range(len(operations)):
            if operations[i] == '+':
                ans.append(ans[len(ans) - 1] + ans[len(ans) - 2])
            elif operations[i] == 'D':
                ans.append(ans[len(ans) - 1] * 2)
            elif operations[i] == 'C':
                ans.pop()
            else:
                ans.append(int(operations[i]))
        count = 0
        for i in range(len(ans)):
            count += ans[i]
        return count
        