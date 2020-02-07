/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换
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
 * @return {ListNode}
 */
// 1. 迭代
const swapPairs = head => {
    if(head == null || head.next == null) 
        return head
    let fakeHead = p = new ListNode()
    let node1, node2
    fakeHead.next = head
    while((node1 = p.next) && (node2 = p.next.next)) {
        node1.next = node2.next
        node2.next = node1
        p.next = node2
        p = node1
    }
    return fakeHead.next
}

// 2. 递归
const swapPairs = head => {
    if(head == null || head.next == null)
        return head;
    let node1 = head, node2 = head.next
    node1.next = swapPairs(node2.next)
    node2.next = node1
    return node2
}