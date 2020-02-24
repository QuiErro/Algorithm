/**
  给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

  注意：

  答案中不可以包含重复的四元组。

  示例：

  给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

  满足要求的四元组集合为：
  [
    [-1,  0, 0, 1],
    [-2, -1, 1, 2],
    [-2,  0, 0, 2]
  ]
 */
 
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, k) {
  // 1.排序
  nums.sort((a, b) => a - b);  // 注意：要传入函数参数 否则sort()会按字符串逐个字符比较大小
  let res = [];
  for(let i = 0; i < nums.length - 3; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    for(let index = i + 1; index < nums.length - 2; index++) {
      if(index > i + 1 && nums[index] === nums[index - 1]) continue;
      let target = k - nums[i] - nums[index];
      let start = index + 1, end = nums.length - 1;
      while(start < end) {
        let cur = nums[start] + nums[end];
        if(cur < target) start++;
        else if(cur > target) end--;
        else {
          res.push([nums[i],nums[index],nums[start], nums[end]]);
          // 去重 
          while(start < end && nums[start + 1] === nums[start]) start ++;
          while(start < end && nums[end - 1] === nums[end]) end--;
          start ++; end --;
        }
      }
    }
  }
  return res;
};