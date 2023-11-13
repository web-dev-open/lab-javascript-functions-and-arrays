// Iteration #1: Find the maximum
function maxOfTwoNumbers() {}
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
const result = maxOfTwoNumbers(5, 10);
console.log(result);



// Iteration #2: Find longest word
function findLongestWord(words) {
  let longestWord = words[0]; // Initialize with the first word in the array.

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      
      longestWord = words[i];
    }
  }

  return longestWord;
}
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const longest = findLongestWord(words);
console.log(longest); 


// Iteration #3: Calculate the sum

function sumNumbers(numbers) {
  let sum = 0; // Initialize a variable to store the sum.

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }

  return sum; 
}

// Example usage:
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

const total = sumNumbers(numbers);
console.log(total); 


// Iteration #3.1 Bonus:
function sum(arr) {
  let total = 0;

  for (let item of arr) {
    if (typeof item === 'number') {
      total += item;
    } else if (typeof item === 'string') {
      total += item.length;
    } else if (typeof item === 'boolean') {
      total += item ? 1 : 0;
    }
  }

  return total;
}

// Example usage:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const result1 = sum(mixedArr);
console.log(result1); // This will print 57
// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}


// Level 2: Array of strings
function averageWordLength(words) {
  let totalLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length; // 
  }

  const average = totalLength / words.length; // Divide the total length by the number of words to get the average.

  return average;
}

// Example usage:
const words1 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const avgWordLength = averageWordLength(words1);
console.log(avgWordLength); 

// Bonus - Iteration #4.1
function averageNumbers(numbers) {
  
  const sum = sumNumbers(numbers); // Calculate the sum using the sumNumbers function.
  const average = sum / numbers.length; // Divide the sum by the number of elements to get the average.

  return average;
}
const numbers1 = [2, 6, 9, 10, 7, 4, 1, 9];
const avg = averageNumbers(numbers1);
console.log(avg); 
// Iteration #5: Unique arrays
function uniquifyArray(words) {
  if (words.length === 0) {
    return [];
  }

  const uniqueWords = [];
  
  for (let word of words) {
    if (uniqueWords.indexOf(word) === -1) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
}

// Example usage:
const word = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
const uniqueWords = uniquifyArray(word);
console.log(uniqueWords);



// Iteration #6: Find elements
function doesWordExist(words3, targetWord) {
  for (let i = 0; i < words3.length; i++) {
    if (words3[i] === targetWord) {
      return true; 
    }
  }
  return false; 
}
const words3 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const targetWord = 'truth';
const exists = doesWordExist(words3, targetWord);
console.log(exists); 




// Iteration #7: Count repetition
function howManyTimes(words, targetWord) {
  let count = 0;
  
  for (let word of words) {
    if (word === targetWord) {
      count++; 
    }
  }

  return count;
}

// Example usage:
const words4 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const targetWord1 = 'matter';
const count = howManyTimes(words4, targetWord1);
console.log(count); 


// Iteration #8: Bonus
function greatestProduct(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxProduct = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check horizontally (left to right)
      if (j + 3 < cols) {
        const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        maxProduct = maxOfTwoNumbers(maxProduct, product);
      }
      // Check vertically (top to bottom)
      if (i + 3 < rows) {
        const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        maxProduct = maxOfTwoNumbers(maxProduct, product);
      }
    }
  }

  return maxProduct;
}

// Example usage with the provided matrix:
const matrix = [
  
[8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],

[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],

[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],

[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37,2, 36, 91],

[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],

[24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],

[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],

[67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],

[24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],

[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],

[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],

[16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],

[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],

[19, 80, 81, 68,5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],

[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],

[88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],

[4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],

[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],

[20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],

[1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]

];

const result3 = greatestProduct(matrix);
console.log(result3); 

//bonus iteration 8.1

function greatestProductOfDiagonals(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxProduct = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check diagonally (from top-left to bottom-right)
      if (i + 3 < rows && j + 3 < cols) {
        const product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
        maxProduct = Math.max(maxProduct, product);
      }
      // Check diagonally (from top-right to bottom-left)
      if (i + 3 < rows && j - 3 >= 0) {
        const product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }

  return maxProduct;
}

// Example usage with the provided matrix:
const matrix2 = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],

[49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],

[81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],

[52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37,2, 36, 91],

[22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],

[24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],

[32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],

[67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],

[24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],

[21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],

[78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],

[16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],

[86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],

[19, 80, 81, 68,5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],

[4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],

[88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],

[4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],

[20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],

[20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],

[1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]

];

const result4 = greatestProductOfDiagonals(matrix2);
console.log(result4); // This will print the greatest product of diagonally laid out four values in either direction.


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}