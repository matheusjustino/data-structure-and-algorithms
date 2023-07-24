/** https://leetcode.com/problems/add-binary/ */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let rest = 0;
  let result = '';
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
      const sum = (Number(a[i] || 0) + Number(b[j] || 0)) + rest;
      result = (sum % 2) + result;
      rest = sum > 1 ? 1 : 0;
  }

  if (rest) result = '1' + result;
  return result;
};