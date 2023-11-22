// Iteration #1: Find the maximum

function maxOfTwoNumbers(num1,num2) {

  return Math.max(num1,num2)

}
let max= maxOfTwoNumbers(8,9)
console.log("The max of two numbers"+max)



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {}
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


let longestWordResults = findLongestWord(words);
console.log(`The longest word is: ${longestWordResults}`);





// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}

function sumNumbers(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

let results = sumNumbers(numbers);
console.log(`The sum of the numbers is: ${results}`);




// Iteration #3.1 Bonus:
function sum() {}



function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof element === 'number') {
            total += element;
        } else if (typeof element === 'boolean') {
            total += Number(element);
        } else if (typeof element === 'string') {
            total += element.length;
        } else {
            throw new Error("Unsupported data type sir or ma'am");
        }
    }

    return total;
}

try {
    let mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
    let resultss = sum(mixedArr);
    console.log(`The sum of the array is: ${resultss}`);
} catch (error) {
    console.error(error.message);
}





// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}
function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return null; // To avoid division by zero
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Example usage:
let averageResult = averageNumbers(numbersAvg);
console.log(`The average of the numbers is: ${averageResult}`);




// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() { }
function averageWordLength(words) {
    if (words.length === 0) {
        return null; // To avoid division by zero
    }

    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }

    return totalLength / words.length;
}


let averageLengthResult = averageWordLength(wordsArr);
console.log(`The average length of the words is: ${averageLengthResult}`);


// Bonus - Iteration #4.1
function avg() {}

function avg(arr) {
    if (arr.length === 0) {
        return null; // To avoid division by zero
    }

    let total = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' || typeof arr[i] === 'boolean') {
            total += Number(arr[i]);
            count++;
        } else if (typeof arr[i] === 'string') {
            total += arr[i].length;
            count++;
        }

    }

    return total / count;
}



const mixedArry = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
let averageResults = avg(mixedArry);
console.log(`The average of the mixed array is: ${averageResults}`);


// Iteration #5: Unique arrays
const wordsUnique = [
  'bring'
];

function uniquifyArray() {}

function uniquifyArray(words) {
  if (words.length === 0) {
        return null; // To avoid division by zero
    }
    let uniqueArray = [];

    for (let i = 0; i < words.length; i++) {
        if (uniqueArray.indexOf(words[i]) === -1) {
            uniqueArray.push(words[i]);
        }
    }

    return uniqueArray;
}

let uniqueWordsArray = uniquifyArray(wordsUnique);
console.log(`Array with duplicates: ${wordsUnique}`);
console.log(`Array without duplicates: ${uniqueWordsArray}`);




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}
function doesWordExist(words, targetWord) {
     if (words.length === 0) {
        return null; // To avoid division by zero
    }
    for (let i = 0; i < words.length; i++) {
        if (words[i] === targetWord) {
            return true;
        }
    }

    return false;
}


let wordToSearch = "orange";
let resultsss = doesWordExist(wordsFind, wordToSearch);

if (resultsss) {
    console.log(`The word "${wordToSearch}" exists in the array.`);
} else {
    console.log(`The word "${wordToSearch}" does not exist in the array.`);
}




const wordsCount = [
  'matter'
];

function howManyTimes() {}

function howManyTimes(words, targetWord) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === targetWord) {
            count++;
        }
    }

    return count;
}

let wordToSearchh = "banana";
let countResult = howManyTimes(wordsCount, wordToSearchh);
console.log(`The word "${wordToSearchh}" appears ${countResult} times in the array.`);




 const matrix = [
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}

function greatestProduct(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxProduct = 0;

    // Check horizontal products
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check vertical products
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j < cols; j++) {
            const product = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonal products (from top-left to bottom-right)
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = 0; j <= cols - 4; j++) {
            const product = matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] * matrix[i + 3][j + 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    // Check diagonal products (from top-right to bottom-left)
    for (let i = 0; i <= rows - 4; i++) {
        for (let j = cols - 1; j >= 3; j--) {
            const product = matrix[i][j] * matrix[i + 1][j - 1] * matrix[i + 2][j - 2] * matrix[i + 3][j - 3];
            maxProduct = Math.max(maxProduct, product);
        }
    }

    return maxProduct;
}

// Example usage:
const resultt = greatestProduct(matrix);
console.log(`The greatest product in the 20x20 grid is: ${resultt}`);



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
//Environment setup. Do not modify the below code. 
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