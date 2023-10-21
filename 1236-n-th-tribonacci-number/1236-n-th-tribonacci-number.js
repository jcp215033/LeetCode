var tribonacci = function(n) {
    let menu = {
        0: 0,
        1: 1,
        2: 1
    }
    let dp = (n) => {
        if (menu[n] !== undefined) {
            return menu[n];
        }
        return menu[n] = dp(n-1)+dp(n-2)+dp(n-3);
    }
    return dp(n);
};