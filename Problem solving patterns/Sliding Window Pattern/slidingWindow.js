// Sliding Window Pattern

// This pattern involves creating a
// window which can either be an array or
// number from one position to another

// Depending on a certain condition,
// the window either increases or closes (and a
// new window is created

// Very useful for keeping track of a subset of
// data in an array/string etc.

// Example - maxSubarraySum

// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive
// elements in the array

// maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 2); // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// maxSubarraySum([4, 2, 1, 6], 1); // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
// maxSubarraySum([], 4); // null

const maxSubarraySum = (arr, n) => {};

console.log(maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 2));
