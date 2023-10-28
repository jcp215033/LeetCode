/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    matrix = matrix.flat()
    let l = 0, r = matrix.length - 1, m;
    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (matrix[m] < target) l = m + 1
        else if (matrix[m] > target) r = m - 1
        else return true
    }
    return false
};