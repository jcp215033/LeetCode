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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = []
    if (!root) return res
    let deque = [root]
    while (deque.length) {
        let len = deque.length
        let lvl;
        for (let i = 0; i < len; i++) {
            let curr = deque.shift()
            lvl = curr.val
            if (curr.left) deque.push(curr.left)
            if (curr.right) deque.push(curr.right)
        }
        res.push(lvl)
    }
    return res
};