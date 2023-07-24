/** https://leetcode.com/problems/roman-to-integer/ */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (romanValues[s[i]] >= (romanValues[s[i+ 1]] || 0)) {
            result += romanValues[s[i]];
        } else {
            result += romanValues[s[i + 1]] - romanValues[s[i]];
            i += 1;
        }
    }

    return result;
};