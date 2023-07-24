/** https://leetcode.com/problems/minimum-depth-of-binary-tree/ */

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
 * @return {number}
 */
var minDepth = function(root) {
  function dfs(node) {
      if (!node) return 0;
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return dfs(node.right) + 1;
      if (node.right === null) return dfs(node.left) + 1;

      return Math.min(dfs(node.left), dfs(node.right)) + 1;
  }

  return dfs(root);
};