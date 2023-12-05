function findMissingNumber(arr) {
  const n = arr.length + 1; // n is one greater than the length of the array, as one number is missing
  const sumOfAllNumbers = (n * (n + 1)) / 2; // Sum of all numbers from 0 to n using the formula: n * (n + 1) / 2
  const actualSum = arr.reduce((acc, num) => acc + num, 0); // Sum of the numbers in the array
  return sumOfAllNumbers - actualSum; // The missing number is the difference between the sum of all numbers and the sum of the array
}

// Test the function
const array1 = [3, 0, 1]; // The missing number is 2
const array2 = [5, 1, 4, 2, 0]; // The missing number is 3

console.log(findMissingNumber(array1)); // Output: 2
console.log(findMissingNumber(array2)); // Output: 3