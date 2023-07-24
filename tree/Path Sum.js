/** https://leetcode.com/problems/path-sum/description/ */

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let flag = false;
    let rootVal = root?.val ?? 0;

    function isLeaf(node) {
        return !node?.left && !node?.right;
    }

    function resolve(node, acc) {
        if (!node) return;

        acc.val += +node.val;
        if ((acc.val + rootVal) === targetSum) {
            if (isLeaf(node)) {
                flag = true;
                return;
            }
        }

        resolve(node.left, {...acc});
        resolve(node.right, {...acc});
    }

    if (root?.val === undefined) return false;
    if (isLeaf(root) && root.val === targetSum) return true;
    if (isLeaf(root) && root.val !== targetSum) return false;

    resolve(root?.left, { val: 0 });
    resolve(root?.right, { val: 0 });
    return flag;
};
