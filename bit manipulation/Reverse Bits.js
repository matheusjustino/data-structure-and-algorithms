/** https://leetcode.com/problems/reverse-bits/ */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let padded =  n.toString(2).padStart(32, '0');
    let reversed = padded.split('').reverse().join('');

    return parseInt(reversed, 2);
};
