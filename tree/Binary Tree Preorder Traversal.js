/** https://leetcode.com/problems/binary-tree-preorder-traversal/ */

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root || root?.val === null) return [];

    let result = [];

    function resolve(node) {
        if (node) {
            result.push(node.val);

            if (node?.left) {
                resolve(node.left);
            }
            
            if (node?.right) {
                resolve(node.right);
            }
        }

        return result;
    }

    return resolve(root);
};
