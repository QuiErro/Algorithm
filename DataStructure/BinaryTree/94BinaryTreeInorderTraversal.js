/**
  给定一个二叉树，返回它的中序 遍历。

  示例:

  输入: [1,null,2,3]
     1
      \
       2
      /
     3

  输出: [1,3,2]
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
var inorderTraversal = function(root) {
  const arr = []
  const traverse = root => {
    if(root === null) return
    traverse(root.left)
    arr.push(root.val)
    traverse(root.right)
  }
  traverse(root)
  return arr
};

// 2. 迭代
var inorderTraversal = function(root) {
  if(root === null) return []
  const stack = [], res = []
  let p = root
  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    const node = stack.pop()
    res.push(node.val)
    p = node.right
  }   
  return res
};