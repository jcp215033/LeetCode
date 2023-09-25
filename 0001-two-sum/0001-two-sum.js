/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        if (hash[nums[i]] !== undefined) {
            return [i, hash[nums[i]]]
        } else {
            hash[value] = i
        }
    }
};