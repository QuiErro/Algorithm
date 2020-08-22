class Queue {
  constructor() {
    this.queue = []
  }
  push(val) {
    this.queue.push(val)
  }
  shift() {
    return this.queue.shift()
  }
  peek() {
    return this.queue[0] || null
  }
}