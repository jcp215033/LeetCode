/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    function quickSort(arr, l, r) {
        if (r - l + 1 <= 1) {
            return arr
        }

        // let randIdx = l + Math.floor(Math.random() * (r - l + 1));

        let left = l, pivot = arr[r]

        for (let i = l; i < r; i++) {
            if (arr[i] > pivot) {
                let tmp = arr[i]
                arr[i] = arr[left]
                arr[left] = tmp
                // [arr[i], arr[left]] = [arr[left], arr[i]]
                left++
            }
        }
        arr[r] = arr[left]
        arr[left] = pivot
        // [arr[r], arr[left]] = [arr[left], arr[r]]

        quickSort(arr, l, left - 1)
        quickSort(arr, left + 1, r)
    }

    quickSort(nums, 0, nums.length - 1)
    return nums[k - 1]
};