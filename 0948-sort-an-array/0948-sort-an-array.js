/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function quickSort(arr, l, r) {
        if (r - l + 1 <= 1) {
            return arr
        }

        let pivot = arr[r], left = l;

        for (let i = l; i < r; i++) {
            if (arr[i] < pivot) {
                let temp = arr[i]
                arr[i] = arr[left]
                arr[left] = temp
                left++
            }
        }

        arr[r] = arr[left]
        arr[left] = pivot

        quickSort(arr, l, left - 1)
        quickSort(arr, left + 1, r)

        return arr
    }

    return quickSort(nums, 0, nums.length - 1)
};