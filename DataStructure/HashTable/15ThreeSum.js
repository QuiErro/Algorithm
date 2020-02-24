/**
  给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

  注意：答案中不可以包含重复的三元组。
  
  示例：

  给定数组 nums = [-1, 0, 1, 2, -1, -4]，

  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
 */
 
 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 // 1. 超出时间限制
var threeSum = function(nums) {
  const res = [];
  const set = new Set();
  for(let i = 0; i < nums.length - 2; i++) {
    if(i >= 1 && nums[i] === nums[i - 1]) continue;
      // map的key是元素的数值
      // map的key有值：已找到剩余两个数
      let map = {};
      for(let j = i + 1; j < nums.length; j++) {
        if(map[nums[j]]) {
          let arr = [nums[i], nums[j], 0 - nums[i] - nums[j]]
          arr.sort();
          set.add(arr.toString())
        } else {
          map[0 - nums[i] - nums[j]] = 1;
        }
      }
  }
  set.forEach(item => {
    res.push(item.split(','));
  });
  return res;
};

// 2. 双指针
var threeSum = function(nums) {
  // 1.排序
  nums.sort((a, b) => a - b);  // 注意：要传入函数参数 否则sort()会按字符串逐个字符比较大小
  let res = [];
  // 2.数组全正或全负
  if(nums[0] > 0 || nums[nums.length - 1] < 0) return res;
  for(let i = 0; i < nums.length - 2; i++) {
    if(i >= 1 && nums[i] === nums[i - 1]) continue;
    // 3. 双指针循环只需在当前元素是负数时，对后面的元素查找分析
    // 如果当前元素是正数，不必再次循环
    if(nums[i] > 0) break;
    let target = 0 - nums[i]; 
    let start = i + 1, end = nums.length - 1;
    while(start < end) {
      const cur = nums[start] + nums[end];
      if(cur < target) start++;
      else if(cur > target) end--;
      else {
        res.push([nums[i], nums[start], nums[end]]);
        // 去重
        while(start < end && nums[start + 1] === nums[start]) start ++;
        while(start < end && nums[end - 1] === nums[end]) end--;
        start ++; end --; 
      }
    }
  }
  return res;
};