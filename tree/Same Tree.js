/** https://leetcode.com/problems/same-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  function resolve(n1, n2) {
      if (!n1 && !n2) return true;

      if (n1?.val !== n2?.val) return false;

      return resolve(n1.left, n2.left) && resolve(n1.right, n2.right);

  }

  return resolve(p, q);
};