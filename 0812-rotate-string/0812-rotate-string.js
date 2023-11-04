/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    for (let i = 0; i < s.length; i++) {
        s = s.substring(1) + s[0]
        if (s === goal) return true
    }
    return false
};