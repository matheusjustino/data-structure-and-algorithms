/** https://leetcode.com/problems/palindrome-number/ */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let strX = `${x}`;
  let left = 0;
  let right = strX.length - 1;
  while (left < right) {
      if (strX[left] !== strX[right]) return false
      left++;
      right--;
  }
  return true;
};