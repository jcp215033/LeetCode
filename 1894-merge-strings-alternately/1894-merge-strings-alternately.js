/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = '';
    for (let i = 0; i < word1.length || i < word2.length; i++) {
        if (word1[i]) res += word1[i]
        if (word2[i]) res += word2[i]
    }
    return res
};