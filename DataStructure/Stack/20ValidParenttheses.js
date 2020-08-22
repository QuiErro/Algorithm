/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
 * 有效字符串需满足：
 *  1. 左括号必须用相同类型的右括号闭合。
 *  2. 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 示例 1:
 *  输入: "()"  输出: true
 * 示例 2:
 *  输入: "(]"  输出: false
 */
 
 /**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const stack = []
  // 当字符串不为空时，循环字符串，利用stack数据结构判断
  for(let i = 0; i < s.length; i++) {
    let ch = s.charAt(i)
    // 只有字符是 ( [ { 的情况，才会被push进数组，用来判断下个字符
    if(ch === '(' || ch === '[' || ch === '{') 
      stack.push(ch)
    // 若数组在为空的情况下，push进的是 ) ] } 或其他字符，则不是有效字符串
    if(!stack.length) return false
    // 分情况匹配，正常能匹配后，数组pop出上个字符，此时stack应该为空数组
    if(ch === ')' && stack.pop() !== '(') return false
    if(ch === ']' && stack.pop() !== '[') return false
    if(ch === '}' && stack.pop() !== '{') return false
  }
  // 同时包含了s为空字符串的情况
  return stack.length === 0
}

// 2. replace
const isValid = s => {
  while (s.length) {
    const temp = s
    s = s.replace('()', '')
    s = s.replace('[]', '')
    s = s.replace('{}', '')
    if (s == temp) return false // 在s不为空字符串下，若本轮循环未消除可匹配的子字符串，则为false
  }
  return true
}

const isValid = s => {
  if(s.length % 2) return false
    const stack = []
    for (let i = 0; i < s.length; i += 1) {
      const c = s[i]
      if (c === '(' || c === '[' || c === '{') {
        stack.push(c)
      }else {
        const t = stack[stack.length - 1]
        if (
          (t === '(' && c === ')') ||
          (t === '[' && c === ']') ||
          (t === '{' && c === '}')
        ) {
          stack.pop()
        } else {
          return false
        }
      }
    }
  return stack.length === 0
}