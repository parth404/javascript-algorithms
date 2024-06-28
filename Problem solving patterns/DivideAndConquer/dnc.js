// Divide And Conquer Pattern

// This pattern involves dividing a data set
// into smaller chunks and then repeating a
// process with a subset of data

// This decreases time complexity tremendously

// EXAMPLE - Binary Search
// Given a sorted array of integers, write a function
// called search, that accepts a value and returns
// the index where the value passed to the function is
// located. If the value is not found, return -1

// search([1,2,3,4,5,6], 4) 3
// search([1,2,3,4,5,6], 6) 5
// search([1,2,3,4,5,6], 11) -1

// Naive approach
// const search = (arr, val) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// };

// Time Complexity O(N)

// Refactored approach using B.S

const search = (arr, val) => {
  // define start and end
  let start = 0;
  let end = arr.length - 1;

  // loop till start <= end
  while (start <= end) {
    // find mid point index in sorted array
    let mid = Math.floor((start + end) / 2);
    // store value of current element in mid point
    let current = arr[mid];

    if (current < val) {
      // if current element is less than the searched value
      // move start after the current mid as value was not found in the previous search window
      start = mid + 1;
    } else if (current > val) {
      // if current element is greater than the searched value
      // decrease the search window by moving end point before the mid
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1; // return -1 if value was not found
};

// Time Complexity - Log(N) - BInary Search!

// Output

console.log(search([1, 2, 3, 4, 5, 6], 4));
