// Median_of_Two_Sorted_Arrays
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
var findMedianSortedArrays = function(nums1, nums2) {
	let m=nums1.length, n=nums2.length;
	let arr=[], j=0,k=0;
	for(var i=0;i<(n+m);i++)
	{
		if(nums1[j]<nums2[k] || k == n)
		{
			arr.push(nums1[j]);
			j++;
		}
		else{
			arr.push(nums2[k]);
			k++;
		}
	}
	let ss=arr.length;
	if(ss%2 === 1)
	{
		let md=arr[parseInt(ss/2)];
		return md;
	}
	else{
		let md=(arr[(ss/2)-1]+arr[ss/2])/2;
		return md;
	}
};

let nums1 = [1,3,4,6], nums2 = [2,3];
console.log(findMedianSortedArrays(nums1,nums2));