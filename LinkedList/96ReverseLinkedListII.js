/**
 * leetcode 96
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转
 * 1 ≤ m ≤ n ≤ 链表长度
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */
 
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
 
 // 1. 迭代
const reverseBetween = (head, m, n) => {
    let interval = n - m
    let p = fakeHead = new ListNode()
    let pre, cur, front, tail
    p.next = head
    // 找到反转区间的前节点
    for(let i = 0; i < m - 1; i ++) {
        p = p.next
    }
    // 保存前节点
    front = p
    // 保存区间首节点
    pre = tail = p.next
    cur = pre.next
    // 区间反转
    for(let i = 0; i < interval; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    // 前节点的 next 指向区间末尾
    front.next = pre
    // 区间首节点的 next 指向后节点(循环完后的cur就是反转区间的后节点)
    tail.next = cur
    return fakeHead.next
}

// 2. 递归
const reverseBetween = (head, m, n) => {
  let p = fakeHead = new ListNode()
  fakeHead.next = head
  let start, end,  // 记录反转区间首尾节点
      front, tail  // 记录区间的前节点和后节点
  // 找到区间的前节点
  for(let i = 0; i < m - 1; i++) {
    p = p.next
  }
  //保存前节点
  front = p 
  // 记录区间首节点
  start = front.next
  // 找到区间尾节点
  for(let i = m - 1; i < n; i++) {
    p = p.next
  }
  end = p
  //保存区间后节点
  tail = end.next
  end.next = null
  // 递归，使前节点指向区间尾节点，区间首节点指向后节点
  front.next = reverse(null, start)
  start.next = tail
  return fakeHead.next
}

const reverse = (pre, cur) => {
    if(!cur) return pre
    let next = cur.next
    cur.next = pre
    return reverse(cur, next)
}