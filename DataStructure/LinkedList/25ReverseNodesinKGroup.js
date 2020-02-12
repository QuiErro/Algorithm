/**
 * leetcode 25
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表
 * k 是一个正整数，它的值小于或等于链表的长度
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序
 * 示例：
 *  给定这个链表：1->2->3->4->5
 *  当 k = 2 时，应当返回: 2->1->4->3->5
 *  当 k = 3 时，应当返回: 3->2->1->4->5
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
 * @param {number} k
 * @return {ListNode}
 */
 // 1. 递归
const reverseKGroup = (head, k) => {
    let pre = null, cur = p = head
    // 检查后续元素是否能组成一组
    for(let i = 0; i < k; i++) {
        if(p == null) return head
        p = p.next
    }
    
    for(let i = 0; i < k; i++){
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }

    // pre为本组最后一个节点，cur为下一组的起点
    head.next = reverseKGroup(cur, k)
    return pre
}

// 2. 迭代
const reverseKGroup = (head, k) => {
    let count = 0;
    // 1. 判断后续元素是否能构成一组
    // 2. 统计链表元素个数
    for(let p = head; p != null; p = p.next) {
        if(p == null && i < k) return head
        count++
    }
    // 分组，共loopCount组
    let loopCount = Math.floor(count / k)
    let p = fakeHead = new ListNode()
    fakeHead.next = head
    // 对每组进行反转
    for(let i = 0; i < loopCount; i++) {
        let pre = null, cur = p.next
        for(let j = 0; j < k; j++) {
            [cur.next, pre, cur] = [pre, cur, cur.next]
        }
        // 当前 pre 为该组的尾节点，cur 为下一组首节点，start是该组首节点
        let start = p.next
        p.next = pre
        start.next = cur
        p = start
    }
    return fakeHead.next
}
