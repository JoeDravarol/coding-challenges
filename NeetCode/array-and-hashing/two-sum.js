// URL
// https://neetcode.io/problems/two-integer-sum

// INSTRUCTIONS
/*
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]

Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]

Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]

Constraints:

    2 <= nums.length <= 1000
    -10,000,000 <= nums[i] <= 10,000,000
    -10,000,000 <= target <= 10,000,000
*/

// SOLUTION
/**
* This function return the indicies of i and j such that nums[i] + nums[j] will add up to the target value.
*
* @param {number[]} nums - The array of numbers to check
* @param {number} target - The target to find
* @returns {number[]} A tuple (smallest to largest) containing the index of the pair that adds to target.
*/
function twoSum(nums, target) {
  // Track existing number's index
  const prevNumMap = {};

  for (let i = 0; i < nums.length; i++) {
    // The result will always be smaller than the target
    // We want to check whether the other pair exist in the lookup table formula: {target - nums[i]}
    const nextPair = target - nums[i];

    if (nextPair in prevNumMap) {
      return [prevNumMap[nextPair], i];
    }

    prevNumMap[nums[i]] = i;
  }

  return [];
}

// TESTCASES
console.log(twoSum([3, 4, 5, 6], 7), [0, 1]);
console.log(twoSum([4, 5, 6], 10), [0, 2]);
console.log(twoSum([5, 5], 10), [0, 1]);
console.log(twoSum([3, 4, 5, 6, 3], 6), [0, 4]);
