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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    let deque = []
    if (root) deque.push(root);
    while (deque.length) {
        let length = deque.length
        let arr = []
        for (let i = 0; i < length; i++) {
            let curr = deque.shift()
            arr.push(curr.val)
            if (curr.left) deque.push(curr.left)
            if (curr.right) deque.push(curr.right)
        }
        res.push(arr)
    }
    console.log(res)
    return res
};