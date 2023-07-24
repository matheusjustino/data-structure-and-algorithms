/** https://leetcode.com/problems/balanced-binary-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let balanced = true;

  function resolve(node, height) {
      if (!node) return 0;

      let left = resolve(node.left, height + 1);
      let right = resolve(node.right, height + 1);

      if (Math.abs(left - right) > 1) {
          balanced = false;
      }

      return Math.max(left, right) + 1;
  }
  
  resolve(root, 0);
  return balanced;
};