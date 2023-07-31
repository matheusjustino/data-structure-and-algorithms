/** https://www.hackerrank.com/challenges/tree-preorder-traversal */

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

function preOrder(root) {
    let result = '';
	function solve(node) {
        if (!node) return;
        
        result += node.data + ' ';

        solve(node.left);
        solve(node.right);
    }
    
    solve(root);
    
    console.log(result.trim());
}
