/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return nums
    .sort((a, b) => a - b)
    .reverse()
    .slice(k - 1)
    .shift()
    // k = nums.length - k
    // function quickSelect(l, r) {
    //     let p = l
    //     for (let i = l; i < r; i++) {
    //         if(nums[i] <= nums[r]) {
    //             [nums[i], nums[p]] = [nums[p], nums[i]]
    //             p++
    //         }
    //     }
    //     [nums[r], nums[p]] = [nums[p], nums[r]]
    //     if (p > k) {
    //         return quickSelect(l, p - 1)
    //     } else if (p < k) {
    //         return quickSelect(p + 1, r)
    //     } else {
    //         return nums[p]
    //     }
    // }
    // return quickSelect(0, nums.length - 1)
};