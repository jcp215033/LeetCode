/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    };
    const ans = [];
    for (let num in hash) {
        if (hash[num] === 1) {
            ans.push(num)
        }
    }
    return ans;
};