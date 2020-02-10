/**
 * leetcode 141
 * 给定一个链表，判断链表中是否形成环
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。
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
 
 // 1. 循环链表，用 Set 判重
 const hasCycle = head => {
  let set = new Set()
  let p = head
  while(p) {
    if(set.has(p)) return true
    set.add(p)
    p = p.next
  }
  return false
}

// 2. 循环链表，数组判重
const hasCycle = head => {
  const res = []
  while(head){
    if(res.includes(head)){
      return true
    }else{
      res.push(head)
    }
    head = head.next
  }
  return false
}

// 3. 快慢指针
const hasCycle = head => {
  let fast = slow = new ListNode()
  fast.next = head
  if(fast.next == null || fast.next.next == null) 
    return false
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) {
      return true
    }
  } 
  return false
}