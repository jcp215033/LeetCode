/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0, start = 0, obj = {};
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] < start || obj[s[i]] === undefined) {
          obj[s[i]] = i;
          max = Math.max(i - start + 1, max)
      } else {
          start = obj[s[i]] + 1;
          obj[s[i]] = i;
      }
  }
  return max;
};