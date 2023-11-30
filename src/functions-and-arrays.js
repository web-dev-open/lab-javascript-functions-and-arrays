// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}

// Example usage:
let result = maxOfTwoNumbers(5, 10);
console.log(result);  // Output: 10




// Iteration #2: Find longest word

function findLongestWord(words) {
  if (words.length === 0) {
    return null; // Return null for an empty array
  }
  
  let longestWord = words[0];
  
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

// Example usage:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
let longestWordResult = findLongestWord(words);
console.log(longestWordResult);  // Output: crocodile




// Iteration #3: Calculate the sum

function sumNumbers(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

// Example usage:

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sumResult = sumNumbers(numbers);
console.log(sumResult);  

// Output: 87
