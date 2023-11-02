/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n = String(n)
    let memo = {}
    while(!memo[n]) {
        memo[n] = String(n.split('').map(e => Number(e)**2).reduce((a,b) => a + b))
        n = memo[n]
        if (n === '1') return true
    }
    return false
};