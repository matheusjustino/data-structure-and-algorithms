/** https://leetcode.com/problems/sqrtx/description/ */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return Math.floor(x**.5);
};

var mySqrt = function(x) {
  let start = 0;
  let end = x;
  
  while(start <= end) {
      const mid = Math.floor((start + end) / 2);

      if((mid * mid) <= x && (mid + 1) * (mid + 1) > x) {
          return mid;
      }
      else if((mid * mid) < x) {
         start = mid + 1;
      }
      else {
          end = mid - 1;
      }
  }
};