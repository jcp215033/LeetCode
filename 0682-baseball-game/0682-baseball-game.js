/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const ans = [];
    for (op of operations) {
        if (op === '+') {
            ans.push(ans[ans.length - 1] + ans[ans.length - 2])
        } else if (op === 'D') {
            ans.push(ans[ans.length - 1] * 2)
        } else if (op === 'C') {
            ans.pop()
        } else {
            ans.push(+op)
        }
    }
    return ans.length ? ans.reduce((a,c) => a + c) : 0
};