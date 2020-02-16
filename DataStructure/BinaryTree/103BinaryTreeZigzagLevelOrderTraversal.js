/**
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。
 * 即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 * 例如：
 *  给定二叉树 [3,9,20,null,null,15,7]
          3
         / \
        9  20
          /  \
         15   7
    返回锯齿形层次遍历如下：
      [
        [3],
        [20,9],
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
const zigzagLevelOrder = root => {
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
    // level从0开始
    // 规律：层级为奇数的，需要反转
    if(level % 2) res[level].reverse();      
    // 一层遍历完，层次+1    
    level++
  }
  return res
}