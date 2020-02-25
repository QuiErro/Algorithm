/**
  给定一个二叉树，返回它的 后序 遍历。

  示例:

  输入: [1,null,2,3]  
     1
      \
       2
      /
     3 

  输出: [3,2,1]
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
var postorderTraversal = function(root) {
  const arr = []
  const traverse = root => {
    if(root === null) return
    traverse(root.left)
    traverse(root.right)
    arr.push(root.val)
  }
  traverse(root)
  return arr
};

// 2. 迭代
var postorderTraversal = function(root) {
  if(root === null) return []
  const stack = [], res = []
  let visited = new Set()
  let p = root
  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    let node = stack[stack.length - 1]
    // 如果右孩子存在，而且右孩子未被记录
    if(node.right && !visited.has(node.right)) {
      p = node.right
      visited.add(node.right)
    } else {
      res.push(node.val)
      stack.pop()
    }
  }
  return res
};