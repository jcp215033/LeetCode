/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let n of s) {
        if (n === '(' || n === '{' || n === '[') {
            stack.push(n)
        } else if ((n === ')' && stack[stack.length - 1] === '(') || (n === '}' && stack[stack.length - 1] === '{') || (n === ']' && stack[stack.length - 1] === '[')) {
            stack.pop()
        } else {
            return false
        }
    }
    console.log(stack)
    return stack.length > 0 ? false : true;
};
