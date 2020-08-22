/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length % 2 === 1) return false
    const map = new Map()
    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')
    const stack = []
    for (let i = 0; i < s.length; i += 1) {
        const c = s[i]
        if (map.has(c)) {
            stack.push(c)
        }else {
            const t = stack[stack.length - 1]
            if (map.get(t) === c) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}