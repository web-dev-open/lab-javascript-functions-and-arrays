// Iteration #1: Find the maximum
console.log("\nIteration #1: Find the maximum");

function maxOfTwoNumbers(num1, num2) {

  // With a if conditional stament compared the numbers
  if(num1 > num2) {
    // if num1 is bigger
    return `The number ${num1} is bigger than ${num2}`;

    // if not...
  } else {
    return `   * The number ${num2} is bigger than ${num1}`;
  }

}

//Print the result
console.log(maxOfTwoNumbers(48, 50));

// Iteration #2: Find longest word
console.log("\nIteration #2: Find longest word");

// In this array we have to find the longest word
const words = ['mystery', 'brother', 'Guadalajara', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// Declare the function
function findLongestWord(wordsArray) {
  // Let's create a variable to hold the longest word in the iteraction.
  let longestWord = "";

  // For loop to go over the array.
  for(let i = 0; i < wordsArray.length; i ++) {

    // if statement to compare the longest word.
    if(wordsArray[i].length > longestWord.length) {

      // Keep the the longestWord from the array.
      longestWord = wordsArray[i];
    }
  }

  // Return the longest word.
  return longestWord;

}

// Print the result.
console.log(`   * The longest word is: ${findLongestWord(words)}`);

// Iteration #3: Calculate the sum
console.log("\nIteration #3: Calculate the sum.");

// We have those numbers:
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// We want to add all the numbers of the array
function sumNumbers(numbersArray) {
  
  // Create a variable total to keep the result and initialice it.
  let total = 0;

  // For... of... loop to take over the array
  for(let number of numbersArray) {

    // Add the number into the total.
    total += number;
  }

  // Return the total.
  return total;
}

// Print the result
console.log(`   * The sum of all the numbers in the Array is: ${sumNumbers(numbers)}`);

// Iteration #3.1 Bonus:
console.log("\nIteration #3.1 Bonus:");

// We have this Array and want to sum it (number as a number boolean as a 0 and 1 and string length).
const mixedArray = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(elementsArray) {
  
  // Create a variable to hold the total while looping the array.
  let total = 0;

  // For... of... loop to take over the array.  
  for(let element of elementsArray) {

    // We use here an if statement with typeof to identify numbers and booleans and then add them.
    if(typeof element === "boolean" || typeof element === "number" ) {

      // We add the element to the total.
      total += element;

      // an else if to identy the string and add it but its lenght
    } else if (typeof element === "string") {

      // add the length to the total
      total += element.length;
    }
  }

  return total;
}

// Print the result.
console.log(`   * The mixed sum of mixedArray is: ${sum(mixedArray)} which are numbers, boolean (0 or 1) and the length of string.`);


// Iteration #4: Calculate the average
console.log("\nIteration #4: Calculate the average\n   Level 1: Array of Numbers.");

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {

  // I am going to rehutiize the function sumNumbers and divide it between the length of the array.
  return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
  
}

// Show the result
console.log(`      * The average is ${averageNumbers(numbersAvg)}. Rehusing functions is fun!!`);


// Level 2: Array of strings
console.log("\nIteration #4: Calculate the average\n   Level 2: Array of strings.");

// Here's the array of words
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArray) { 

  // We use a if statement to add the words
  // So if it is zero, we stop it.
  if(wordsArray.length === 0) {
    return 0;
  }

  // We use a variable to take over.
  let arrayLength = 0;

  // Looping over the array
  for(let i = 0; i < wordsArray.length; i++) {
    arrayLength += wordsArray[i].length;
  }

  // Calculate the average by dividing arrayLength by the number of words
  let arrayAverage = arrayLength / wordsArray.length;
  return arrayAverage;
}

// Showing the result.
console.log(`      * The average is: ${averageWordLength(wordsArr)}`);

// Bonus - Iteration #4.1
console.log("\nBonus - Iteration #4.1");

// For this fucntion I will recicle a code I made in Interaction 3.1 (The generic Sum)
function avg(elementsArray) {
  // Since we're using the generic SUM function.
  let elementsAverage = sum(elementsArray) / elementsArray.length;

  return elementsAverage;

}

//Showing the result.
console.log (`   * The average of the Elements Array is ${avg(mixedArray)}. Rehusing code is easy and practical!!`);

// Iteration #5: Unique arrays
const wordsUnique = [
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

console.log("\nIteration #5: Unique arrays.");

function uniquifyArray(uniqueWords) {

  // Create an empty Array to store the unique values
  let uniqueWordsArray = [];

  // Loop throug the array with a for of loop
  for (let word of uniqueWords) {
    
    // With an if statement we take over the array to compare with indexof and -1 which means it is a not found value.
    if(uniqueWordsArray.indexOf(word) === -1) {

      // Save the unique valies in the array with push
      uniqueWordsArray.push(word);   
    }
  }
    // Return the total of repeated values.
    return uniqueWordsArray    
}

// Show the result with Console.log
console.log(`   * The unique values are: ${uniquifyArray(wordsUnique)}`);



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



// Iteration #7: Count repetition
const wordsCount = [
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

function howManyTimes() {}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}




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

console.log("\n");