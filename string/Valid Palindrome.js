/** https://leetcode.com/problems/valid-palindrome/ */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    function isAlphaNumeric(char) {
        return (
            (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
            (char.charCodeAt() >= 48 && char.charCodeAt() <= 57)
        );
    }

    let flag = true;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (!isAlphaNumeric(s[left])) {
            left++;
        } else if (!isAlphaNumeric(s[right])) {
            right--;
        } else {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                flag = false;
                break;
            }

            left++;
            right--;
        }
    }

    return flag;
};
