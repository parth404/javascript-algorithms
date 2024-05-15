// Multiple Pointers

// Creating pointers or values that correspond to an
// index or position and move towards the begining,
// end or middle based on a certain condition

// Very efficient for solving problems with minimal space complexity as well

// EXAMPLE - sumZero

// Write a function called sumZero which accepts a sorted
// array of integers. The function should find the first pair
// where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, 0, 1, 3]) // undefined
// sumZero([1,2,3]) // undefined

// Since it's a sorted array we can use binary search

const sumZero = (arr) => {
  // define start and end positions
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
};

// Output

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
