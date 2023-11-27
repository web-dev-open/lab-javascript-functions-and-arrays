// Iteration #1: Find the maximum
function maxOfTwoNumbers() {}
function maxOfTwoNumbers(a,b) {
  return a > b ? a : b;

}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {}
function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null; // Return null for an empty array
  }

  let longestWord = wordsArray[0];

  for (let i = 1; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }

  return longestWord;

}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}
function sumNumbers(numbersArray) {
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }

  return sum;
}



// Iteration #3.1 Bonus:
function sum() {}
function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  return array.reduce((acc, current) => acc + current, 0);
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}
function averageNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return null;
  }

  const sum = sumNumbers(numbersArray);
  return sum / numbersArray.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() { }
function averageWordLength(wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  }

  let totalLength = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    totalLength += wordsArray[i].length;
  }

  return totalLength / wordsArray.length;
 }

// Bonus - Iteration #4.1
function avg() {}
function avg(array) {
  if (array.length === 0) {
    return null;
  }

  const sum = sum(array);
  return sum / array.length;
}

// Iteration #5: Unique arrays
const wordsUnique = ['bring'];

function uniquifyArray() {}
function uniquifyArray(wordsArray) {
  return [...new Set(wordsArray)];
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}
function doesWordExist(wordsArray, word) {
  return wordsArray.includes(word);

}



const wordsCount = ['matter'];

function howManyTimes() {}
function howManyTimes(wordsArray, word) {
  return wordsArray.filter((element) => element === word).length;

}



const matrix = [ [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}
function greatestProduct() {
  let maxProduct = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Check horizontal product
      if (j + 3 < matrix[i].length) {
        const horizontalProduct = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        maxProduct = Math.max(maxProduct, horizontalProduct);
      }

      // Check vertical product
      if (i + 3 < matrix.length) {
        const verticalProduct = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        maxProduct = Math.max(maxProduct, verticalProduct);
      }

      // Check diagonal product (top-left to bottom-right)
      if (i + 3 < matrix.length && j + 3 < matrix[i].length) {
        const diagonalProduct1 = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
        maxProduct = Math.max(maxProduct, diagonalProduct1);
      }

      // Check diagonal product (top-right to bottom-left)
      if (i + 3 < matrix.length && j - 3 >= 0) {
        const diagonalProduct2 = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
        maxProduct = Math.max(maxProduct, diagonalProduct2);
      }
    }
  }

  return maxProduct;

}
