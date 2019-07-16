// const threeSum = (nums) => {
//   let ans = []
//   if (nums.length < 3) return ans
//   for(let i = 0; i < nums.length - 2; i++) {
//     for(let j = i + 1; j < nums.length - 1; j++) {
//       for(let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           ans.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return ans
// }

// const  threeSum = (nums) => {
//   let ans = []
//   let hash = {}
//   if (nums.length < 3) return ans
//   for(let i = 0; i < nums.length - 2; i++) {
//     for(let j = i + 1; j < nums.length - 1; j++) {
//       if(hash[nums[j]] !== undefined) {
//         ans.push([nums[j]].concat(hash[nums[j]]))
//         hash[nums[j]] = undefined
//       } else {
//         let mark = 0 - nums[i] - nums[j]
//         hash[mark] = [nums[i], nums[j]]
//       }
//     }
//   }
//   return ans
// }

// threeSum([-1, 0, 1, 2, -1, -4])

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    nums.sort((a, b) => a - b); // 排序
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }        
    return ans;
};
