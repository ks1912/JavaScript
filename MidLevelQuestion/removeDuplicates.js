function removeDuplicates(nums) {
  // Create a Set from the input array to automatically remove duplicates
  const uniqueNums = new Set(nums);

  // Convert the Set back to an array to get the unique numbers
  return Array.from(uniqueNums);
}

// Test the function
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);