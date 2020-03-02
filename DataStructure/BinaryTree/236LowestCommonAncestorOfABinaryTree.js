/**
  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

  示例 1:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
  输出: 3
  解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
  示例 2:

  输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
  输出: 5
  解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
   

  说明:

  所有节点的值都是唯一的。
  p、q 为不同节点且均存在于给定的二叉树中。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 // 1.
var lowestCommonAncestor = function(root, p, q) {
  if(root === null || root === p || root === q) return root;
  let set = new Set();
  let map = new WeakMap();
  const queue = [root];
  // 层序遍历
  while(queue.length) {
    let size = queue.length;
    while(size --) {
      const front = queue.shift();
      if(front.left) {
        queue.push(front.left);
        // 记录父节点
        map.set(front.left, front);
      }
      if(front.right) {
        queue.push(front.right);
        // 记录父节点
        map.set(front.right, front);
      }
    }
  }
  // 构造 p 的上层节点集合
  while(p) {
    set.add(p);
    p = map.get(p);
  }
  while(q) {
    // 一旦发现公共节点重合，直接返回
    if(set.has(q))return q;
    q = map.get(q);
  }
};

// 2.
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if(left === null) return right;
  if(right === null) return left;
  return root;
};