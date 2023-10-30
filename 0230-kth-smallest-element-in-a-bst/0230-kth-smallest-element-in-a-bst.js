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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res;
    let count = 0;
    
    function inOrder(root) {
        if (!root) return false;
        if (inOrder(root.left)) return true;
        count++;
        if (count === k) {
            res = root.val;
            return true;
        }
        return inOrder(root.right);
    }
    inOrder(root);
    return res;
};