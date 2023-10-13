/**
 * @param {number} n
 * @return {number}
 */
 
var fib = function(n) {
    let memo = {}
    function helper(n) {
        if (n === 0) {
            return 0
        } else if (n === 1) {
            return 1
        } else if (memo[n]) {
            return memo[n]
        }

        memo[n - 1] = helper(n - 1)
        memo[n - 2] = helper(n - 2)
        return memo[n - 1] + memo[n - 2]
    }
    return helper(n)
};