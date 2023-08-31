/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        const id = nums2.findIndex(e => e === nums1[i]);
        const idx = nums2.findIndex((e, j) => j > id && e > nums1[i]);
        ans.push(nums2[idx] || -1)
        // let flag = false;
        // for (let j = 0; j < nums2.length; j++) {
        //     if (flag === false && nums2[j] === nums1[i]) {
        //         flag = true;
        //     } else if (flag === true && nums2[j] > nums1[i]) {
        //         ans.push(nums2[j]);
        //     } else if (j === nums2.length - 1) {
        //         ans.push(-1);
        //     }
        // }
    }
    return ans;
    // return nums1.map((e, i) => nums2.find((m, j) => m > e && j > nums2.find(n)) || -1 );
};  