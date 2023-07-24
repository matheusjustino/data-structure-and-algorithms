/** https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  function resolve(nodes, start, end) {
      if (start > end) return null;

      let middle = Math.ceil((start + end) / 2);
      let root = new TreeNode(nodes[middle]);

      root.left = resolve(nodes, start, middle - 1);
      root.right = resolve(nodes, middle + 1, end);

      return root;
  }
  
  return resolve(nums, 0, nums.length - 1);
};