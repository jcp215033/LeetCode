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
 * @param {number} key
 * @return {TreeNode}
 */
var minNode = function(root) {
    let curr = root;
    while (curr && curr.left) {
        curr = curr.left
    }
    return curr.val
}
var deleteNode = function(root, val) {
    if (!root) return null

    if (val > root.val) root.right = deleteNode(root.right, val)
    else if (val < root.val) root.left = deleteNode(root.left, val)
    else {
        if (!root.left) return root.right
        else if (!root.right) return root.left
        else {
            let minVal = minNode(root.right)
            root.val = minVal
            root.right = deleteNode(root.right, minVal)
        }
    }
    return root
};