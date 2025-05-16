// Iteration #1: Find the maximum
function maxOfTwoNumbers(n1,n2) {
  return Math.max(n1,n2)
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {
  let longest = words[0];
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
  let sum =0;
  for(const number of numbers){
    sum +=number
  }
  return sum
}



// Iteration #3.1 Bonus:
function sum(items) {
  let sum =0;
  for(const item of items){
    if(typeof item =='number'){
      sum+=item
    }
    if(typeof item == 'string'){
      sum+= item.length
    }
    if(typeof item == 'boolean'){
      sum+= Number(item)
    }
  }
  return sum
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  let total =0;

  for(const number of numbers){
    total +=number
  }
  return total/numbers.length
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  let total =0;
  for(const word of words){
    total+= word.length
  }
  return total / words.length;
}

// Bonus - Iteration #4.1
function avg(items) {
  let total =0;
  for(const item of items){
    if (typeof item == 'number') {
      total += item;
    }
    if (typeof item == 'string') {
      total += item.length;
    }
    if (typeof item == 'boolean') {
      total += Number(item);
    }
  }
  return total / items.length;
}

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

function uniquifyArray(items) {
  let arrayResult= [];
  for(const item of items){
    if(arrayResult.indexOf(item)==-1){
      arrayResult.push(item)
    }
  }
  return arrayResult
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, word) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] == word) {
      return true;
    }
  }
  return false;
}



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

function howManyTimes(words, word) {
  let counter =0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == word) {
      counter++
    }
  }
  return counter;
}



// Iteration #8: Bonus
matrix = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5]
];

function greatestProduct(matrix) {
  let longest_product = 0;
  let product_horizontal = 0;
  let product_vertical = 0;
  for (let fil = 0; fil < matrix.length; fil++) {
    for (let col = 0; col < matrix[fil].length; col++) {
      if (matrix.length - fil >= 4) {
        product_vertical = matrix[fil][col] * matrix[fil + 1][col] * matrix[fil + 2][col] * matrix[fil + 3][col];
      }

      if (matrix[fil].length - col >= 4) {
        product_horizontal = matrix[fil][col] * matrix[fil][col + 1] * matrix[fil][col + 2] * matrix[fil][col + 3];
      }
      if (product_horizontal > longest_product) {
        longest_product = product_horizontal;
      }
      if (product_vertical > longest_product) {
        longest_product = product_vertical;
      }
    }
  }
  return longest_product;
}






