/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let L = 1, R = Math.max(...piles);
    while (L <= R) {
        let K = Math.floor((L + R) / 2);
        let hours = 0;
        for (let i = 0; i < piles.length; i++) hours += Math.ceil(piles[i] / K);
        if (hours > h) L = K + 1;
        else R = K - 1;
    };
    return L;
};