/**
  给定一个二叉树，找出其最大深度。

  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

  说明: 叶子节点是指没有子节点的节点。

  示例：
  给定二叉树 [3,9,20,null,null,15,7]，

      3
     / \
    9  20
      /  \
     15   7
  返回它的最大深度 3 。
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
 // 1. 递归
var maxDepth = function(root) {
  if(root === null) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};

// 2. 迭代 层序遍历
var maxDepth = function(root) {
  if(root === null) return 0;
  let queue = [root], level = 0;
  while(queue.length) {
    let size = queue.length;
    while(size --) {
      const front = queue.shift();
      if(front.left) queue.push(front.left);
      if(front.right) queue.push(front.right);
    }
    level ++;
  }
  return level;
};