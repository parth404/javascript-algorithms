// Given two strings, write a function to determine if the
// second string is an anagram of the first. An anagram is
// a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.

//validAnagram(" ", " ") // true
//validAnagram("aaz", "zza") // false
//validAnagram("anagram", "nagaram") // true
//validAnagram("rat", "car") // false
//validAnagram("awesome", "awesom") // false
//validAnagram("qwerty", "qeywrt") // true
//validAnagram("texttwisttime", "timetwisttext") // true

// Initial Approach

// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   // create two frequency counters and store occurences for each character
//   let counter1 = {};
//   let counter2 = {};

//   for (let char of str1) {
//     counter1[char] = (counter1[char] || 0) + 1;
//   }
//   for (let char of str2) {
//     counter2[char] = (counter2[char] || 0) + 1;
//   }

//   for (let key in counter1) {
//     // check if characters match
//     if (!(key in counter2)) {
//       return false;
//     }
//     // check if frequencies match
//     if (counter1[key] !== counter2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// Refactored approach

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  // create a counter to store frequency of each character occurences in str1
  let counter = {};

  // Increment char count for each occurence or initialize with 1
  [...str1.toLowerCase()].forEach((char) => {
    counter[char] = ++counter[char] || 1;
  });

  // check if count of characters for str2 match with the counter
  for (let char of str2) {
    // return false if character doesn't exist in counter
    if (!(char in counter)) {
      return false;
    } else {
      // reduce count by 1 if character exists
      --counter[char];
    }
  }

  return true;
};

console.log(validAnagram("texttwisttime", "timetwisttext"));
