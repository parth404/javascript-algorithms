// Frequency counter pattern

// This pattern uses objects or sets to collect values/frequencies of values

// This can avoid the need to use nested loops or O(N^2) operations
// with arrays / strings

// Example

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,3], [4,4, 1]) // false (must be same frequency)

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  // create two objects to store frequencies
  let counter1 = {};
  let counter2 = {};

  // Initialize the two object with key value pairs
  for (let val of arr1) {
    // if key exists adds by 1 to value else initializes with 1
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    // Check if square of key in arr1 exists as key in arr2
    if (!(key ** 2 in counter2)) {
      return false;
    }
    // check if frequency of key in arr1 and it's square in arr2 is same
    if (counter1[key] !== counter2[key ** 2]) {
      return false;
    }
  }

  console.log(counter1, counter2);
  return true;
};

// Output
console.log(same([1, 2, 3, 1], [9, 1, 1, 4]));
