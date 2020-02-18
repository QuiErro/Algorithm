/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位
 * 返回滑动窗口中的最大值
    输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

      滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7       3
     1 [3  -1  -3] 5  3  6  7       3
     1  3 [-1  -3  5] 3  6  7       5
     1  3  -1 [-3  5  3] 6  7       5
     1  3  -1  -3 [5  3  6] 7       6
     1  3  -1  -3  5 [3  6  7]      7
 */
// 1.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  if(!nums.length || !k) return [];
  let window = [], res = [];  // window存放元素下标， res记录每次滑动，窗口中的最大值
  for(let i = 0; i < nums.length; i++) {
    // 前k个元素不需要剔除，之后如果队首元素（最大值）已不再滑动窗口范围内，需要剔除
    if(window[0] !== undefined && window[0] <= i - k) window.shift();
    // 保证队首是最大的
    while(nums[window[window.length - 1]] <= nums[i])  window.pop();
    window.push(i);
    if(i >= k - 1) res.push(nums[window[0]]) 
  }
  return res;
};