/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let memo = {}
    function helper (n) {
        if (n === 0) {
            return 0
        } else if (n < 3) {
            return 1
        } else if (memo[n]) {
            return memo[n]
        }
        memo[n] = helper(n - 3) + helper(n - 2) + helper(n - 1)
        return memo[n]
    }
    return helper(n)
};