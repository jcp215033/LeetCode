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
            const regex = new RegExp(str[i], "g");
            let temp = str.replace(regex, j);
            if (Number(temp) < min) min = +temp
            if (Number(temp) > max) max = +temp
        }
        console.log(max, min)
        if (max - min > maxDiff) {
            maxDiff = max - min
        }
    }
    return maxDiff;
};