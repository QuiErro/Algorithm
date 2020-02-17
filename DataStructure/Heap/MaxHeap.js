class MaxHeap {
  constructor(arr = [], compare = null) {
    this.data = arr;
    this.size = arr.length;
    this.compare = compare;
  }
  
  getSize() {
    return this.size;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  add(value) {
    this.data.push(value);
    this.size++;
    // 让新元素向上比较，如果优先级大于父节点，则交换，保持堆的特性
    this._siftUp(this.getSize() - 1);
  }
  
  findMax() {
    if (this.getSize() === 0) return;
    return this.data[0];
  }
  
  // 队首元素出队
  extractMax() {
    const ret = this.findMax();
    this._swap(0, this.getSize() - 1); // 队首、队尾交换
    this.data.pop(); // pop出队尾
    this.size--;
    this._siftDown(0); // 队首下沉，维持堆的特性
    return ret;
  }

  toString() {
    console.log(this.data);
  }
  
  _swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  
  _parent(index) {
    return Math.floor((index - 1) / 2);
  }
  
  _leftChild(index) {
    return 2 * index + 1;
  }
  
  _rightChild(index) {
    return 2 * index + 2;
  }
  
  _siftUp(k) {
    // 上浮操作，只要子元素优先级比父节点大，父子交换位置，一直向上直到根节点
    while (k > 0 && this.compare(this.data[k], this.data[this._parent(k)])) {
      this._swap(k, this._parent(k));
      k = this._parent(k);
    }
  }
  _siftDown(k) {
    // 存在左孩子的时候
    while (this._leftChild(k) < this.size) {
      let j = this._leftChild(k);
      // 存在右孩子而且右孩子比左孩子大
      if (this._rightChild(k) < this.size &&
        this.compare(this.data[this._rightChild(k)], this.data[j])) {
        j++;
      }
      if (this.compare(this.data[k], this.data[j])) return;
      // 父节点比子节点小，交换位置
      this._swap(k, j);
      // 继续下沉
      k = j;
    }
  }
}

class PriorityQueue {
  // max 为优先队列的容量
  constructor(max, compare) {
    this.max = max;
    this.compare = compare;
    this.maxHeap = new MaxHeap([], compare);
  }

  getSize() {
    return this.maxHeap.getSize();
  }

  isEmpty() {
    return this.maxHeap.isEmpty();
  }

  getFront() {
    return this.maxHeap.findMax();
  }

  enqueue(e) {
    // 比当前最高的优先级的还要高，直接不处理
    if (this.getSize() === this.max) {
      if (this.compare(e, this.getFront())) return;
      this.dequeue();
    }
    return this.maxHeap.add(e);
  }

  dequeue() {
    if (this.getSize() === 0) return null;
    return this.maxHeap.extractMax();
  }
}

let pq = new PriorityQueue(3, (a, b) => a-b);
pq.enqueue(1);
pq.enqueue(3);
pq.enqueue(2);
console.log(pq.dequeue());
console.log(pq.dequeue());