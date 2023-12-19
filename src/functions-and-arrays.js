// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

let largest = maxOfTwoNumbers(12, 32);
console.log("Largest number:", largest);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > largest.length) {
      largest = arr[i];
    }
  }

  return largest;
}

let longestWord = findLongestWord(words);
console.log("Longest word is:", longestWord);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  if (arr == null || arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let sumNums = sumNumbers(numbers);
console.log("Sum of numbers is:", sumNums);

// Iteration #3.1 Bonus: Sum mixed array
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(arr) {
  if (arr == null || arr.length === 0) {
    return 0;
  }

  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    let t = typeof arr[i];

    if (t === 'string') {
      s += arr[i].length;
    } else if (t === 'boolean' || t === 'number') {
      s += arr[i];
    } else {
      throw new Error("Unsupported data type");
    }
  }

  return s;
}

let mixedSum = sum(mixedArr);
console.log("Sum of mixed array is:", mixedSum);

// Iteration #4: Calculate the average of an array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  }

  let sum = sumNumbers(arr);
  return sum / arr.length;
}

let avgOfNums = averageNumbers(numbersAvg);
console.log("Average is:", avgOfNums);

// Iteration #4.1 Bonus: Average of an array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  }

  let totalLength = 0;

  for (let i = 0; i < arr.length; i++) {
    totalLength += arr[i].length;
  }

  return totalLength / arr.length;
}

let result = averageWordLength(wordsArr);
console.log("Average Length:", result);

// Bonus - Iteration #4.2: Average of a mixed array
function avg(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  }

  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    let t = typeof arr[i];

    if (t === 'string') {
      s += arr[i].length;
    } else if (t === 'boolean' || t === 'number') {
      s += arr[i];
    }
  }

  return s / arr.length;
}

let mixAvg = avg(mixedArr);
console.log("Average of mixed array:", mixAvg);

// Iteration #5: Unique arrays
const wordsUnique = ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'poison', 'communion', 'simple', 'bring'];

function uniquifyArray(arr) {
  if (arr == null || arr.length === 0) {
    return null;
  }

  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

let uniqueArr = uniquifyArray(wordsUnique);
console.log("Unique Array:", uniqueArr);

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr == null || arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    }
  }

  return false;
}

let doesExists = doesWordExist(wordsFind, "truth");
console.log(doesExists ? "The word exists in the array" : "The word does not exist");

// Iteration #7: Count repetition
const wordsCount = ['machine', 'matter', 'subset', 'trouble', 'starting', 'matter', 'eating', 'matter', 'truth', 'disobedience'];

function howManyTimes(arr, word) {
  if (arr == null || arr.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }

  return count;
}

let count = howManyTimes(wordsCount, "matter");
console.log('The frequency of the word is:', count);

// Iteration #8: Bonus - Greatest product of four adjacent numbers
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

function greatestProduct(arr) {
  let rows = arr.length;
  let cols = arr[0].length;
  let maxProduct = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Check horizontally
      if (j + 3 < cols) {
        let horizontalProduct = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }

      // Check vertically
      if (i + 3 < rows) {
        let verticalProduct = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }
    }
  }

  return maxProduct;
}

let maxProd = greatestProduct(matrix);
console.log("Max product:", maxProd);
