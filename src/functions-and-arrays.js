
  function maxOfTwoNumbers(a, b) {
    return Math.max(a, b);
  }

  function findLongestWord(words) {
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) longest = word;
    }
    return longest;
  }

  function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers)  sum += number;
    return sum;
  }

  function sum(arr) {
    let total = 0;
    for (const item of arr) {
        if (typeof item === 'number') total += item;
        else if (typeof item === 'string')  total += item.length;
        else if (typeof item === 'boolean') total += item ? 1 : 0;
    }
    return total;
  }

  function averageNumbers(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum / numbers.length;
  }

  function averageWordLength(words) {
    let totalLength = 0;
    for (const word of words) totalLength += word.length;
    return totalLength / words.length;
  }

  function avg(arr) {
    const total = sum(arr);
    return total / arr.length;
  }

  function uniquifyArray(words) {
    return [...new Set(words)];
  }

  function doesWordExist(words, word) {
    for (const w of words) {
        if (w === word) {
            return true;
        }
    }
    return false;
  }

  function howManyTimes(words, word) {
    let count = 0;
    for (const w of words) {
        if (w === word) {
            count++;
        }
    }
    return count;
  }


  function greatestProduct(matrix) {
    let maxProduct = 0;
    for (let i = 0; i < matrix.length - 3; i++) {
        for (let j = 0; j < matrix[i].length - 3; j++) {
            let product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            maxProduct = Math.max(maxProduct, product);

            product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            maxProduct = Math.max(maxProduct, product);

            product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);

            if (i >= 3) {
                product = matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] * matrix[i - 3][j + 3];
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    return maxProduct;
  }

  function greatestProductOfDiagonals(matrix) {
    let maxProduct = 0;
    for (let i = 0; i < matrix.length - 3; i++) {
        for (let j = 0; j < matrix[i].length - 3; j++) {
            let product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);

            if (i >= 3) {
                product = matrix[i][j + 3] * matrix[i - 1][j + 2] * matrix[i - 2][j + 1] * matrix[i - 3][j];
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }
    return maxProduct;

  }

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
