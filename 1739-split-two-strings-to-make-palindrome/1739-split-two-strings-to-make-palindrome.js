var checkPalindrome = function(string, left, right) {
    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

var checkPalindromeFormation = function(a, b) {
    var canFormPalindrome = function(a, b) {
        let left = 0;
        let right = a.length - 1;
        // Find where a and b start to differ when compared from outside in
        while (left < right && a[left] === b[right]) {
            left++;
            right--;
        }
        // Either the remaining substring of a or b must be a palindrome
        return checkPalindrome(a, left, right) || checkPalindrome(b, left, right);
    };
    return canFormPalindrome(a, b) || canFormPalindrome(b, a);
};