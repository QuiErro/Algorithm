/**
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
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
 * @return {boolean}
 */
// 递归
var isSymmetric = function(root) {
  if(root == null) return true;
  // 判断根节点左右子树是否对称
  return judge(root.left, root.right);
};

const judge = (node1, node2) => {
  if(!node1 && !node2) return true;
  // 其中一个节点为空，或两个节点值不相等
  if(!node1 || !node2 || node1.val !== node2.val) return false;
  // 递归，判断两节点的子节点是否对称，1-左与2-右  1-右与2-左
  return judge(node1.left, node2.right) && judge(node1.right, node2.left);
}

// 迭代
var isSymmetric = function(root) {
  if(root === null) return true;
  const queue = [root.left, root.right];
  let node1, node2;
  while(queue.length) {
    node1 = queue.shift();
    node2 = queue.shift();
    if(!node1 && !node2) continue;
    if(!node1 || !node2 || node1.val !== node2.val) return false;
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
}