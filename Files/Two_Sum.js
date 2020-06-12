/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]. */
const number=[3,3];
const target = 6;
var twoSum = (num, target) => {
    let map={};
    let finalVal;
    for(var i=0;i<num.length;i++)
        {
            if(map[num[i]])
            {
                const { idx } = map[num[i]];
				if(idx!=i)
					{
                	finalVal=[idx,i];
                	break;
					}
            }
			let k=target-num[i];
            map[k] = {val:num[i],idx:i};
		}
	return finalVal;
};

console.log(twoSum(number,target))