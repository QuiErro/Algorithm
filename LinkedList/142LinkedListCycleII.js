/**
 * leetcode 142
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。
 */
 
 /**
  * 当快慢指针环内某节点相遇之后，让新指针从头出发，和慢指针同时前进，且每次前进一步，两者相遇的节点，就是环起点
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
 const detectCycle = head => {
  let fast = slow = fakeHead = new ListNode()
  fast.next = head
  if(fast.next == null || fast.next.next == null) 
    return null
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast == slow) {
      let p = fakeHead
      while(p != slow) {
        p = p.next
        slow = slow.next
      }
      return p
    }
  } 
  return null
}