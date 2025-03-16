// URL
// https://leetcode.com/problems/contains-duplicate-ii/description/

// INSTRUCTIONS
/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

 

Constraints:

    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
    0 <= k <= 105

*/

// SOLUTION
/**
*
* @param {number[]} nums
* @param {number} k
* @returns {boolean}
*/
function containsNearbyDuplicate(nums, k) {
  const dictionary = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (dictionary.has(nums[i]) && i - dictionary.get(nums[i]) <= k) {
      return true;
    }
    dictionary.set(nums[i], i);
  }

  return false;
}

// Neetcode: Sliding-window solution
// Notes: The window gets smaller if the left pointer and right pointer is out of bound
function containsNearbyDuplicate(nums, k) {
  const window = new Set();

  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    // If indicies is out of bound, pretend the element never existed
    if (r - l > k) {
      window.delete(nums[l]);
      l++;
    }

    // If the indicies is in bound and there is a duplicate then return true
    if (window.has(nums[r])) {
      return true;
    }

    window.add(nums[r]);
  }

  return false;
}

// TESTCASES
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
