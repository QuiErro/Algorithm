class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    if (this.data.length) return this.data.pop()
    throw new Error('stack is empty')
  }

  peek() {
    if (this.data.length) return this.data[this.data.length - 1]
    throw new Error('stack is empty')
  }

  isEmpty() {
    return this.data.length === 0
  }
}