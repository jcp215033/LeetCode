/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let str = num.toString();
    let maxDiff = -Infinity;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= 9; j++){
            let temp = str.replace(new RegExp(str[i], "g"), j);
            min = +temp < min ? +temp : min;
            max = +temp > max ? +temp : max;
        }
        maxDiff = max - min > maxDiff ? max - min : maxDiff;
    }
    return maxDiff;
};