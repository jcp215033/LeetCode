/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {
    let sum = 0
    function dp (root) {
        if (!root) return false
        sum += root.val;
        if (!root.left && !root.right && sum !== targetSum) return false
        else if (!root.left && !root.right && sum === targetSum) return true
        if (root.left) {
            if (dp(root.left)) return true
            else sum -= root.left.val
        }
        if (root.right) {
            if (dp(root.right)) return true
            else sum -= root.right.val
        }
        return false
    }
    return dp(root)
    
};

/*
f (!root) return false
        targetSum -= root.val;
        if (targetSum < 0) return false
        else if (targetSum === 0 && !root.left && !root.right) return true
        if (root.left) {
            if (hasPathSum(root.left, targetSum)) return true
            else targetSum += root.left.val
        }
        if (root.right) {
            if (hasPathSum(root.right, targetSum)) return true
            else targetSum += root.right.val
        }
        return false
 */
