// function which takes in a string and returns
// counts of each character in the string

const countChar = (str) => {
  // create an object to store result

  let result = {};

  // loop through each character, store character as key
  // and count as value, initialize value with 1
  [...str.toLowerCase()].forEach((char) => {
    // convert values to lowercase and check for alphanumeric values
    if (/[a-z0-9]/.test(char)) {
      // if key value pair exists increment by 1 else initialize with 1
      result[char] = ++result[char] || 1;
    }
  });
  return result;
};

// Output
console.log(countChar("g1Ggaab! Bbaa"));
