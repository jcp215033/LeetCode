/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0
    for (let i = 0; i < s.length - 2; i++) {
        sub = s.substring(i, i + 3)
        if (sub[0] !== sub[1] && sub[1] !== sub[2] && sub[2] !== sub[0]) count++
    }
    return count
};