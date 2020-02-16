/**
  给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典中的单词。
  说明:

  如果不存在这样的转换序列，返回 0。
  所有单词具有相同的长度。
  所有单词只由小写字母组成。
  字典中不存在重复的单词。
  你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
  示例 1:

  输入:
  beginWord = "hit",
  endWord = "cog",
  wordList = ["hot","dot","dog","lot","log","cog"]

  输出: 5

  解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
       返回它的长度 5。
  示例 2:

  输入:
  beginWord = "hit"
  endWord = "cog"
  wordList = ["hot","dot","dog","lot","log"]

  输出: 0

  解释: endWord "cog" 不在字典中，所以无法进行转换。
 */
 
 /**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  // 两个单词在无权图中是否相邻(相等或仅有一个字母差异即相邻)
  const isSimilar = (a, b) => {
    let diff = 0
    for(let i = 0; i < a.length; i++) {
      if(a.charAt(i) !== b.charAt(i)) diff++
      if(diff > 1) return false
    }
    return true
  }
  const queue = [beginWord]
  const index = wordList.indexOf(beginWord)
  if(index !== -1) wordList.splice(index, 1)  // 如果数组里有跟beginWord相同的单词，直接过滤
  let res = 2
  while(queue.length) {
    let size = queue.length
    // 遍历当前这步中所有的变换结果
    while(size--) {
      const front = queue.shift()
      for(let i = 0; i < wordList.length; i++) {
        if(!isSimilar(front, wordList[i])) continue
        // 找到相邻的单词
        if(wordList[i] === endWord) {
          return res  // 当变换完成，返回步数
        } else {
          queue.push(wordList[i]) // 把当前所有相邻的单词推进队列
          wordList.splice(i, 1)  // 队列中已经记录该相邻单词，就从原单词数组中剔除
          i--  // 与本次循环结束后要执行的 i++ 相抵消，还是从当前下标的单词（已是新单词）开始遍历
        }
      }
    }
    res += 1  // 步数 +1
  }
  return 0
}