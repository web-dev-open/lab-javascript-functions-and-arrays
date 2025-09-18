// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Iteration #2: Find the longest word
function findLongestWord(words) {
  if (words.length === 0) return null;

  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

// Bonus - Iteration #3.1: A generic sum()
function sum(arr) {
  let total = 0;
  for (let el of arr) {
    if (typeof el === 'number') {
      total += el;
    } else if (typeof el === 'string') {
      total += el.length;
    } else if (typeof el === 'boolean') {
      total += el ? 1 : 0;
    } else {
      throw new Error("Unsupported data type");
    }
  }
  return total;
}


// Level 1: Array of numbers
function averageNumbers(numbers) {
  if (numbers.length === 0) return null;
  return sumNumbers(numbers) / numbers.length;
}

// Level 2: Array of strings
function averageWordLength(words) {
  if (words.length === 0) return null;
  let totalLength = 0;
  for (let word of words) {
    totalLength += word.length;
  }
  return totalLength / words.length;
}


function avg(arr) {
  if (arr.length === 0) return null;
  return sum(arr) / arr.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(words) {
  if (words.length === 0) return null;
  let unique = [];
  for (let word of words) {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  }
  return unique;
}


function doesWordExist(words, word) {
  if (words.length === 0) return null;
  for (let w of words) {
    if (w === word) return true;
  }
  return false;
}


function howManyTimes(words, word) {
  let count = 0;
  for (let w of words) {
    if (w === word) count++;
  }
  return count;
}


function greatestProduct(matrix) {
  let maxProduct = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
     
      if (j + 3 < cols) {
        let product = matrix[i][j] * matrix[i][j+1] * matrix[i][j+2] * matrix[i][j+3];
        maxProduct = Math.max(maxProduct, product);
      }
      // Vertical
      if (i + 3 < rows) {
        let product = matrix[i][j] * matrix[i+1][j] * matrix[i+2][j] * matrix[i+3][j];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }
  return maxProduct;
}


function greatestProductOfDiagonals(matrix) {
  let maxProduct = 0;
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
     
      if (i + 3 < rows && j + 3 < cols) {
        let product = matrix[i][j] * matrix[i+1][j+1] * matrix[i+2][j+2] * matrix[i+3][j+3];
        maxProduct = Math.max(maxProduct, product);
      }

      if (i + 3 < rows && j - 3 >= 0) {
        let product = matrix[i][j] * matrix[i+1][j-1] * matrix[i+2][j-2] * matrix[i+3][j-3];
        maxProduct = Math.max(maxProduct, product);
      }
    }
  }
  return maxProduct;
}

// --------------------
// Example tests
// --------------------
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const words3 = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];
const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const words5 = ['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'];

console.log("Max of two:", maxOfTwoNumbers(10, 20));
console.log("Longest word:", findLongestWord(words));
console.log("Sum numbers:", sumNumbers(numbers));
console.log("Generic sum:", sum(mixedArr));
console.log("Average numbers:", averageNumbers([2, 6, 9, 10, 7, 4, 1, 9]));
console.log("Average word length:", averageWordLength(words));
console.log("Generic avg:", avg(mixedArr));
console.log("Unique words:", uniquifyArray(words3));
console.log("Word exists (matter):", doesWordExist(words4, "matter"));
console.log("How many times (matter):", howManyTimes(words5, "matter"));
