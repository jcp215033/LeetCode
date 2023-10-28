/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    let l = 0, r = matrix.length - 1, m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (matrix[m][0] === target) return true;

        if (matrix[m][0] < target) {
            if (!matrix[m + 1] || matrix[m + 1][0] > target) break;
            else l = m + 1;
        }
        else {
            r = m - 1;
        }
    }

    // Now, search the row 'm' for the target
    let l2 = 0, r2 = matrix[m].length - 1, m2;
    while (l2 <= r2) {
        m2 = Math.floor((l2 + r2) / 2);
        if (matrix[m][m2] === target) return true;

        if (matrix[m][m2] < target) l2 = m2 + 1;
        else r2 = m2 - 1;
    }

    return false;
};
