// Count Unique Values in an array

// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

// EXAMPLE

// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

//Approach

// We take two pointers, i at starting index and j at second index.
// We can get the number of unique values by comparing the array values at the
// two indices and moving the starting index by 1 everytime there is a mismatch
// Also we need to replace the value of arr[i+1] after the increment with arr[j]
// this way we can update and compare with new unique values that we encounter in our loop
// to get the result we return the position of i in the array
// add 1 i.e i+1 to get the actual position in the array which will be equal to the number of unique values.

const countUniqueValues = (arr) => {
  // variable to store result
  let result = 0;
  let i = 0; // first pointer

  // loop through the array using j second pointer
  for (let j = 1; j < arr.length; j++) {
    // if there is a mismatch
    if (arr[i] !== arr[j]) {
      i++; // move i up one position
      arr[i] = arr[j]; // replace value with current value of arr[j]
      result = i + 1; // store i's actual position as result
    }
  }
  return result;
};

// Output

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
