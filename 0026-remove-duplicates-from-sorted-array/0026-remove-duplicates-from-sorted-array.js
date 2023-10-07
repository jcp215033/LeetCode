/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let hash = {};
    let count = 0
    for (let n of nums) {
        hash[n] = (hash[n] || 0) + 1
        if (hash[n] === 1) count++
    }
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (hash[n] > 1) {
            nums[i] = undefined;
            hash[n]--;
        }
    }
    nums.sort((a,b) => a - b);
    return count
};