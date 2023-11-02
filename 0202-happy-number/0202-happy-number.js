/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = String(n)
    let memo = {}
    let dp = n => String(n.split('').map(e => Number(e)**2).reduce((a,b) => a + b))
    while(!memo[n]) {
        memo[n] = dp(n)
        n = memo[n]
        if (n === '1') return true
    }
    return false
};