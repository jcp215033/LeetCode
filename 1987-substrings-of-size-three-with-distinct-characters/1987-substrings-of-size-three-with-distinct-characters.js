/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(string) {
    let count = 0;
  for (let i = 0; i < string.length - 2; i++) {
    if (
      string[i] !== string[i + 1] &&
      string[i + 1] !== string[i + 2] &&
      string[i] !== string[i + 2]
    ) {
      count++;
    }
  }
  return count;
};