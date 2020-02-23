/**
  使用栈实现队列的下列操作：

  push(x) -- 将一个元素放入队列的尾部。
  pop() -- 从队列首部移除元素。
  peek() -- 返回队列首部的元素。
  empty() -- 返回队列是否为空。
  
  示例:
  
  MyQueue queue = new MyQueue();
  queue.push(1);
  queue.push(2);  
  queue.peek();  // 返回 1
  queue.pop();   // 返回 1
  queue.empty(); // 返回 false
 */
 
 
 /**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = [];  // 处理push  [1, 2, 3]
  this.stack2 = [];  // 处理pop peek  先将栈1的元素pop出，再push进栈2 [3, 2, 1]，此时执行真正的pop(得到1，先进先出) peek
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

// 将 stack1 的元素转移到 stack2
MyQueue.prototype.transform = function() {
  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.stack2.length) this.transform();
    return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.stack2.length) this.transform();
    return this.stack2[this.stack2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */