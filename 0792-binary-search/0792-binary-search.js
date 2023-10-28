/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1, m;
    while (l <= r) {
        m = (l + r) / 2 >> 0;
        if (nums[m] < target) {
            l = m + 1
        } else if (nums[m] > target) {
            r = m - 1
        } else {
            return m
        }
    }
    return -1
};