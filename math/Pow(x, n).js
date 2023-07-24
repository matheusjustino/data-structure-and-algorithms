/** https://leetcode.com/problems/powx-n/description/ */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function power(x, n) {
        if (n === 0) return 1;

        let result = 1;
        let base = x;

        while (n > 0) {
            if (n % 2 === 1) {
                result *= base;
            }
            base *= base;
            n = Math.floor(n / 2);
        }

        return result;
    }

    const result = power(x, Math.abs(n));

    if (n < 0) return 1 / result;
    return result;
};
