/**
  给定一个二叉树，返回它的 前序 遍历。

   示例:

  输入: [1,null,2,3]  
     1
      \
       2
      /
     3 

  输出: [1,2,3]
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
 * @return {number[]}
 */
 // 1. 递归
var preorderTraversal = function(root) {
  const arr = []
  const traverse = root => {
    if(root === null) return
    arr.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  return arr
};

// 2. 迭代
var preorderTraversal = function(root) {
  if(root === null) return []
  const stack = [], res = []
  stack.push(root)
  while(stack.length) {
    const node = stack.pop()
    res.push(node.val)
    // 左子节点后进先出
    if(node.right) stack.push(node.right)
    if(node.left) stack.push(node.left)
  }
  return res
};

