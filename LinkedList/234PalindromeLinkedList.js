/**
 * leetcode 234
 * 请判断一个链表是否为回文链表
 * 示例 2:
 *  输入: 1->2->2->1
 *  输出: true
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
 * @return {boolean}
 */
const isPalindrome = head => {
  let dummyHead = slow = fast = new ListNode()
  dummyHead.next = head
  // 寻找链表中点
  while(fast && fast.next) {
    [slow, fast] = [slow.next, fast.next.next]
  }
  let next = slow.next
  slow.next = null
  let newStart = reverse(null, next)
  // 循环，判断节点是否一样
  for(let p = head, newP = newStart; newP != null; p = p.next, newP = newP.next) {
    if(p.val != newP.val) return false
  }
  return true
}

const reverse = (pre, cur) => {
  if(!cur) return pre
  const next = cur.next
  cur.next = pre
  return reverse(cur, next)
}