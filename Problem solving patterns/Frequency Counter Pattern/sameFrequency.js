// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(n1, n2) {
  let num1 = n1.toString().split("");
  let num2 = n2.toString().split("");

  if (num1.length !== num2.length) return false;

  let counter = {};

  num1.forEach((num) => {
    counter[num] = ++counter[num] || 1;
  });

  for (let num of num2) {
    console.log(counter);
    if (!(num in counter) || counter[num] <= 0) {
      return false;
    } else {
      --counter[num];
    }
  }
  return true;
}

console.log(sameFrequency(5589578, 5879385));
