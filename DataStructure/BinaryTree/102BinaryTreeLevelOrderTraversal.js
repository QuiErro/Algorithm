/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）
 * 例如:
 *  给定二叉树: [3,9,20,null,null,15,7]
 *      3
       / \
      9  20
        /  \
       15   7
 *  返回其层次遍历结果：
      [
        [3],
        [9,20],
        [15,7]
      ]
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
 * @return {number[][]}
 */
const levelOrder = root => {
  if(!root) return []
  const queue = []    // 执行队列
  const res = []      // 结果数组
  let level = 0     // 层次
  queue.push(root)
    
  while(queue.length) {
    res.push([])
    let size = queue.length
    // 同层逐个遍历
    while(size--) {
      // 出队
      const front = queue.shift()
      res[level].push(front.val)
      // 入队
      if(front.left) queue.push(front.left)
      if(front.right) queue.push(front.right)
    }    
    // 一层遍历完，层次+1    
    level++
  }
  return res
}