// URL
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// INSTRUCTIONS
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

 

Constraints:

    1 <= nums.length <= 3 * 104
    -100 <= nums[i] <= 100
    nums is sorted in non-decreasing order.

*/

// SOLUTION
/**
* This functions remove duplicate numbers (sorted in ascending order) in=place such that each unique element appears only once
*
* @param {number[]} nums
* @returns {number}
*/
function removeDuplicates(nums) {
  let lastSeen = nums[0];
  let lastUniqueIndex = 1;
  let i = 1;

  while (i < nums.length) {
    if (nums[i] !== lastSeen) {
      nums[lastUniqueIndex] = nums[i];
      lastSeen = nums[i];
      lastUniqueIndex++;
    }

    i++;
  }

  return lastUniqueIndex;
}

// Neetcode solution:
// function removeDuplicates(nums) {
//   let l = 1;
//   for (let r = 1; r < nums.length; r++) {
//     if (nums[r] !== nums[r - 1]) {
//       nums[l++] = nums[r];
//     }
//   }
//   return l;
// }

// TESTCASES
const nums1 = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums1), 2);
console.log(nums1, [1, 2, _])
console.log(removeDuplicates(nums2), 5);
console.log(nums2, [0, 1, 2, 3, 4, _, _, _, _, _]);
