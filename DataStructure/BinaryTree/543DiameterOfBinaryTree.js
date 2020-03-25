/**
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  const calculate = node => {
    if(!node) return 0;
    // 计算该节点左右子树深度
    const left = node.left ? calculate(node.left) + 1 : 0;
    const right = node.right ? calculate(node.right) + 1 : 0;
    if (left + right > max) max = left + right
    return Math.max(left, right)
  }

  let max = 0;
  calculate(root);
  return max;
};