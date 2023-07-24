/** https://leetcode.com/problems/fizz-buzz/ */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  return Array(n).fill(0).map((v, i) => {
      let result = '';
      
      if ((i + 1) % 3 === 0) {
          result += 'Fizz';
      }
      if ((i + 1) % 5 === 0) {
          result += 'Buzz';
      }

      if (!result.length) result = `${i + 1}`;

      return result;
  });
};