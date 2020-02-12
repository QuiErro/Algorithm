/**
 * 示例:
 *  [1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
 */
 
 /**
 * @constructor
 * @param {NestedInteger[]} nestedList
 * @return {Integer[]}
 */
 // 1. 
const flatten = nestedList => {
  const result = []
    fn(result, nestedList)
    return result
}

const fn = (target, source) => {
  for (let i = 0; i < source.length; i++) {
    const item = source[i]
    if(Array.isArray(item)){
      fn(target, item)
    }else{
      target.push(item);
    }
  }
}

// 2. 
const flatten = nestedList =>  nestedList.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur): cur), [])