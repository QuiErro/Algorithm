/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少
 * 示例 1:
 *  输入: n = 12
 *  输出: 3 
 *  解释: 12 = 4 + 4 + 4.
 */
 
 /**
 * @param {number} n
 * @return {number}
 */
const numSquares = n => {
  const map = new Map()
  const queue = []
  queue.push([n, 0])
  map.set(n, true)
  while(queue.length) {
    let [num, step] = queue.shift()
    for(let i = 1; ; i++) {
      const nextNum = num - i * i
      if(nextNum < 0) break
      if(nextNum === 0) return step + 1
      // nextNum 未被记录
      if(!map.get(nextNum)){
        queue.push([nextNum, step + 1])
        map.set(nextNum, true)
      }
    }
  }
}