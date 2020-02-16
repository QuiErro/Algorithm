/**
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值
 * 示例:
 *  输入: [1,2,3,null,5,null,4]
 *  输出: [1, 3, 4]
 *  解释:    
         1            <---
       /   \
      2     3         <---
       \     \
        5     4       <---
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
const rightSideView = root => {
  if(!root) return []
  const queue = [] // 执行队列
  const res = []  // 结果数组
  queue.push(root)
  while(queue.length) {
    res.push(queue[0].val)  // 存放每一层的第一个节点（站在树右侧能看到的那个节点，不一定是该层最右的节点）
    let size = queue.length  // 当前该层的节点个数
    // 遍历某一层的所有节点
    while(size --) {
      let front = queue.shift()
      if(front.right) queue.push(front.right) // 先进先出
      if(front.left) queue.push(front.left)  // 不可省略
    }
  }
  return res
}