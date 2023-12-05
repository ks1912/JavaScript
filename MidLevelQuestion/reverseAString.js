function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and join it back to form a string.
  return str.split('').reverse().join('');
}

// Test the function
const originalString = 'hello';
const reversedString = reverseString(originalString);
console.log(reversedString);