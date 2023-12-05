function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert the string to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Test the function
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "hello";

console.log(isPalindrome(testString1)); // Output: true (ignoring non-alphanumeric characters and case)
console.log(isPalindrome(testString2)); // Output: false