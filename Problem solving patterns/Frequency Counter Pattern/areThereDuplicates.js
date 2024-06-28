// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
  let counter = {};

  args.forEach((char) => {
    counter[char] = ++counter[char] || 1;
  });

  for (char in counter) {
    if (counter[char] > 1) return true;
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//   args.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });

//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

// One Liner Solution using Set
// const areThereDuplicates = () => {
//   return new Set(arguments).size !== arguments.length;
// };

// Output
console.log(areThereDuplicates("s", "d", "s", 1, 3, "s"));
