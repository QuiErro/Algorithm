/**
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
*/

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // 1. 迭代
const reverseList = head => {
  if (!head) return null
  let pre = null, cur = head
  while (cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

// 1. 迭代——简化
const reverseList = head => {
  let [pre, cur] = [null, head]
  while (cur) {
    [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return pre
}

// 2. 递归
const reverseList = head => {
  return reverse(null, head)
}

const reverse = (pre, cur) => {
  if (!cur) return pre
  let next = cur.next
  cur.next = pre
  return reverse(cur, next);
}