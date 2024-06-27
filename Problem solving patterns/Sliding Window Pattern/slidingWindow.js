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

// Naive approach
// const maxSubarraySum = (arr, n) => {
//   // handle empty array
//   if (arr.length === 0) return null;

//   //variable to store max sum
//   let max = -Infinity;

//   // Loop over array
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     // loop to add numbers within subarray
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// };

// we can use sliding window pattern here
// the sum of the first n numbers becomes the window,
// now when we move the window by one, we need to remove a number and add a number
// so, we subtract the number at the starting index, increment the window position by one,
// and add a number at the ending index

// Refactored Approach
const maxSubarraySum = (arr, n) => {
  // return null if array length is less than n
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  // loop over once to calculate sum of first n numbers in array
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; // use value of maxSum as tempSum for initial window position

  // loop over using i=n and compare maxsum within the window
  for (let i = n; i < arr.length; i++) {
    // we remove one number from the starting position and add one number from the ending position
    // this gives the sum of next n numbers
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 3));
