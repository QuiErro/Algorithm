/**
 * leetcode 23
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */
 
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 1. 递归
const mergeKLists = lists => {
  const mergeLists = (lists, start, end) => {
    if(end - start < 0) return null
    if(end - start == 0) return lists[end]
    let mid = Math.floor(start + (end - start) / 2)
      return mergeTwoLists(mergeLists(lists, start, mid), mergeLists(lists, mid + 1, end))
  }
  return mergeLists(lists, 0, lists.length - 1)
}

const mergeTwoLists = (l1, l2) => {
  if(l1 == null) return l2
  if(l2 == null) return l1
  if(l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
}

// 2. 迭代，两两合并
const mergeKLists = lists => {
  if(!lists && !lists.length) return null
  let res = lists[0]
  for(let i = 1; i < n; i++){
    if(lists[i]){
      res = mergeTwoLists(res, lists[i])
    }
  }
  return res
}

const mergeTwoLists = (l1, l2) => {
  if(l1 == null) return l2
  if(l2 == null) return l1
  let p = dummyHead = new ListNode()
  while(l1 && l2) {
    if(l1.val > l2.val) {
      p.next = l2
      p = p.next
      l2 = l2.next
    }else {
      p.next = l1
      p = p.next
      l1 = l1.next
    }
  }
  if(l1) p.next = l1
  else p.next = l2
  return dummyHead.next
} 