function swapKeysAndValues(obj) {
  const swappedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      swappedObj[value] = key;
    }
  }
  return swappedObj;
}

// Test the function
const originalObj = { a: 1, b: 2, c: 3 };
const swappedObj = swapKeysAndValues(originalObj);
console.log(swappedObj); // Output: { '1': 'a', '2': 'b', '3': 'c' }

// Test
