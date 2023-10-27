var sortArray = function(nums) {
    function insertionSort(arr, l, r) {
        for (let i = l + 1; i <= r; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= l && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    function quickSort(arr, l, r) {
        if (r - l + 1 <= 10) {
            insertionSort(arr, l, r);
            return;
        }

        let pivotIndex = l + Math.floor(Math.random() * (r - l + 1));
        let pivot = arr[pivotIndex];
        [arr[pivotIndex], arr[r]] = [arr[r], arr[pivotIndex]]; // swap pivot with last element

        let left = l;
        for (let i = l; i < r; i++) {
            if (arr[i] < pivot) {
                [arr[i], arr[left]] = [arr[left], arr[i]]; // swap
                left++;
            }
        }
        [arr[r], arr[left]] = [arr[left], arr[r]]; // swap pivot to its correct position

        quickSort(arr, l, left - 1);
        quickSort(arr, left + 1, r);
    }

    quickSort(nums, 0, nums.length - 1);
    return nums;
};