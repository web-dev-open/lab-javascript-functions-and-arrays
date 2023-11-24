// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Iteration #2: Find longest word
function findLongestWord(words) {
  if (words.length === 0) {
    return null;
  }

  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Iteration #3: Calculate the sum
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Iteration #3.1 Bonus: Sum
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    } else if (typeof arr[i] === 'string') {
      total += arr[i].length;
    } else if (typeof arr[i] === 'boolean') {
      total += arr[i] ? 1 : 0;
    }
  }
  return total;
}

// Iteration #4: Calculate the average
function averageNumbers(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function averageWordLength(words) {
  if (words.length === 0) {
    return null;
  }
  let totalLength = 0;
  for (let i = 0; i < words.length; i++) {
    totalLength += words[i].length;
  }
  return totalLength / words.length;
}

// Iteration #4.1 Bonus: Average
function avg(arr) {
  if (arr.length === 0) {
    return null;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    } else if (typeof arr[i] === 'boolean') {
      total += arr[i] ? 1 : 0;
    } else if (typeof arr[i] === 'string') {
      total += arr[i].length;
    }
  }
  return total / arr.length;
}

// Iteration #5: Unique arrays
function uniquifyArray(array) {
  const uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

// Iteration #6: Find elements
function doesWordExist(wordArray, wordToSearch) {
  return wordArray.includes(wordToSearch);
}

// Iteration #7: Count repetition
function howManyTimes(wordArray, wordToSearchFor) {
  let count = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === wordToSearchFor) {
      count++;
    }
  }
  return count;
}

// Bonus Iteration: Greatest Product
function greatestProduct(matrix) {
  let maxProduct = 0;

  function calculateProduct(row, col, rowIncrement, colIncrement) {
    let product = 1;
    for (let i = 0; i < 4; i++) {
      product *= matrix[row + i * rowIncrement][col + i * colIncrement];
    }
    return product;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (col + 3 < cols) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 0, 1));
      }
      if (row + 3 < rows) {
        maxProduct = Math.max(maxProduct, calculateProduct(row, col, 1, 0));
      }
    }
  }

  return maxProduct;
}

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
  greatestProduct,
};
