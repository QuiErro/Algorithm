/**
  给定一个二叉树，找出其最小深度。

  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

  说明: 叶子节点是指没有子节点的节点。

  示例:

  给定二叉树 [3,9,20,null,null,15,7],

      3
     / \
    9  20
      /  \
     15   7
  返回它的最小深度  2.
  
  给定二叉树 [3,null,20,15,7],
      3
       \
       20
      /  \
     15   7
  返回它的最小深度  3.
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
var minDepth = function(root) {
  if(root === null) return 0;
  // 左右孩子都不为空，递归
  if(root.left && root.right)
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  // 左孩子不为空，右孩子为空
  else if(root.left)
    return minDepth(root.left) + 1;
  // 右孩子不为空，左孩子为空
  else if(root.right)
    return minDepth(root.right) + 1;
  // 左右孩子都为空，到达叶子节点
  return 1;
};

// 2. 迭代 层序遍历
var minDepth = function(root) {
  if(root === null) return 0;
  let queue = [root];
  let level = 0;
  while(queue.length) {
    let size = queue.length;
    while(size --) {
      let front = queue.shift();
      if(!front.left && !front.right) return level + 1; // 叶子节点
      if(front.left) queue.push(front.left);
      if(front.right) queue.push(front.right);
    }
    level ++;
  }
  return level;
};