/** https://leetcode.com/problems/symmetric-tree/ */

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
// recursively
var isSymmetric = function(root) {
  function resolve(n1, n2) {
      if (!n1 && !n2) return true;
      if (n1?.val !== n2?.val) return false;

      return resolve(n1.left, n2.right) && resolve(n1.right, n2.left);
  }

  return resolve(root?.left, root?.right);
};

// iteratively
var isSymmetric = function(root) {
  function bfs(root) {
      if (!root) {
          return true;
      }

      const queue = [root.left, root.right];

      while(queue.length) {
          let left = queue.shift();
          let right = queue.shift();

          if (!left && !right) continue;
          if ((!left || !right) || (left.val !== right.val)) return false;

          queue.push(left.left, right.right, left.right, right.left);
      }

      return true;
  }

  return bfs(root);
};