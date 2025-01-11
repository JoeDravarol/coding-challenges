// URL
// https://leetcode.com/problems/majority-element/description/

// INSTRUCTIONS
/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

// SOLUTION
/**
* This functions finds the majority element from an integers of array
*
* @param {number[]} nums - The array of integers that will have a majority element exists in the array
* @returns {number} The majority element value
*/
function majorityElement(nums) {
  // Keep track of each num count
  const count = {};

  for (let num of nums) {
    if (!count[num]) {
      count[num] = 0;
    }

    count[num] += 1;
  }

  // Check if num count is greater than n / 2
  for (let key in count) {
    if (count[key] >= nums.length / 2) {
      return key;
    }
  }

  return -1;
}

// TESTCASES
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
