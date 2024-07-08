// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
  if(a>b){
    return a+" is greater than "+b;
  }
  else{
    return b+" is greater than "+a;
  }
}
let n1=prompt("Enter first number: ");
console.log("First number is: "+n1);
let n2=prompt("Enter second number: ");
console.log("Second number is: "+n2);
console.log(maxOfTwoNumbers(n1,n2));



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findLongestWord(words) {
  let max_chars=words[0].length;
  let longest_word=words[0];
  for (let i=0;i<words.length-1;i++){
    let maxI_chars=words[i].length;
    if(maxI_chars>max_chars){
      longest_word=words[i];
      max_chars=maxI_chars;
    }
  }
  return longest_word;
}
console.log("The longest word is "+findLongestWord(words));



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let sum=0;
function sumNumbers(numbers) {
  for(let i=0;i<numbers.length-1;i++){
    sum=sum+numbers[i];
  }
  return sum;
}
console.log("The array of numbers is "+numbers);
console.log("The sum of numbers in the array is "+sumNumbers(numbers));



// Iteration #3.1 Bonus:

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '20', 'lisboa', 8, 10];
// should return: 57
console.log(mixedArr);
function sum(){
  let n=[];
  let add=0;
  for(let i=0; i<mixedArr.length;i++){
    let num=parseFloat(mixedArr[i]);
    if(!isNaN(num)){
      n.push(num);
    }
  }
  console.log(n);
  for(let j=0;j<n.length;j++){
    add=add+n[j];
  }
  return(add);
}
console.log(sum());




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function sumNumbers(numbers) {
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum = sum+numbers[i];
  }
  return sum;
}
function averageNumbers(numbersAvg) {
  let n=numbersAvg.length;
  console.log("The total number of words in the array are: "+n)
  let tot=sumNumbers(numbersAvg);
  console.log("The total sum of words in the array is: "+tot);
  let avg=(tot/n);
  return avg;
}
console.log("The average of numbers is: "+averageNumbers(numbersAvg));


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const wl=[];
let sum=0;
let words = wordsArr.length;
for (let i=0;i<words;i++){
    let maxI_chars=wordsArr[i].length;
    wl.push(maxI_chars);
  }
function sumNumbers(a) {
  for(let i=0;i<a.length;i++){
    sum = sum+a[i];
  }
  return sum;
}
function averageWordLength(wordsArr) { 
  console.log(wl);
  let totSum=sumNumbers(wl);
  let avg=totSum/words;
  return avg;
}  
console.log("The total length of the words is "+sumNumbers(wl));
console.log("The number of words is "+words);
console.log("The average length of the words is "+averageWordLength(wordsArr));


// Bonus - Iteration #4.1
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '20', 'lisboa', 8, 10];
// should return: 57
console.log(mixedArr);
let words=mixedArr.length;
console.log("The total number of words are: "+words);
function avg() {
 function sum(){
  let n=[];
  let add=0;
  for(let i=0; i<mixedArr.length;i++){
    let num=parseFloat(mixedArr[i]);
    if(!isNaN(num)){
      n.push(num);
    }
  }
  console.log(n);
  for(let j=0;j<n.length;j++){
    add=add+n[j];
  }
  return(add);
 } 
 let sumzz=sum();
 let aver=sumzz/words;
 return aver;
}
console.log("The average is "+avg());




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

function uniquifyArray(wordsUnique) {
  return wordsUnique.filter((item, index) => wordsUnique.indexOf(item)===index);
}
console.log("the unique words in array are "+uniquifyArray(wordsUnique));



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let finW=prompt("Enter a word to search for: ");
console.log("Searching for "+finW+"...");
function doesWordExist(wordsFind, finW) {
    for(let i=0;i<wordsFind.length;i++){        
      if(wordsFind[i] === finW)
        return true;
      else
        return false;
  }
}
console.log(doesWordExist(wordsFind, finW));



// Iteration #7: Count repetition
const words = [
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
  let finW=prompt("Enter a word to search for: ");
  count=0;
  console.log("Searching for number of times "+finW+" appears...");
  function howManyTimes(words, finW) {
      for(let i=0;i<words.length;i++){        
        if(words[i] === finW)
          count++;
    }
    return count;
  }
  console.log(howManyTimes(words, finW));



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 98, 69, 48, 99, 4, 58, 24, 55, 58, 5, 66],
  [56, 82, 28, 4, 91, 87, 16, 60, 48, 22, 76, 88, 54, 28, 78, 64, 79, 30, 71, 41],
  [2, 51, 83, 51, 98, 69, 81, 4, 42, 98, 93, 78, 17, 91, 11, 74, 22, 16, 30, 17],
  [21, 18, 96, 91, 70, 22, 31, 1, 47, 97, 81, 45, 28, 36, 30, 20, 7, 71, 54, 65],
  [62, 53, 98, 19, 32, 74, 26, 18, 27, 33, 36, 78, 35, 1, 74, 31, 32, 33, 95, 78],
  [24, 14, 18, 99, 74, 84, 47, 37, 94, 42, 45, 5, 32, 40, 76, 76, 81, 17, 95, 85],
  [1, 87, 15, 43, 10, 43, 93, 37, 38, 51, 64, 97, 52, 60, 11, 91, 25, 97, 43, 28],
  [11, 48, 96, 90, 77, 40, 61, 58, 50, 27, 11, 92, 63, 57, 91, 15, 54, 22, 78, 25],
  [35, 74, 62, 50, 30, 20, 17, 64, 0, 95, 73, 40, 56, 57, 10, 53, 91, 25, 28, 41],
  [95, 68, 23, 4, 60, 1, 53, 17, 31, 12, 58, 4, 57, 2, 75, 59, 60, 69, 16, 91],
  [56, 1, 87, 5, 43, 57, 74, 1, 32, 21, 36, 81, 19, 78, 28, 87, 13, 40, 3, 70],
  [66, 78, 12, 16, 3, 53, 1, 86, 56, 1, 71, 15, 48, 9, 80, 81, 68, 94, 87, 0],
  [4, 62, 49, 98, 95, 23, 49, 15, 23, 5, 3, 35, 86, 49, 34, 34, 26, 78, 4, 61],
  [1, 68, 82, 98, 12, 64, 25, 35, 3, 31, 92, 5, 51, 55, 6, 82, 27, 19, 94, 21],
  [19, 17, 54, 69, 16, 91, 51, 19, 50, 47, 18, 93, 15, 89, 41, 11, 36, 64, 99, 30],
  [17, 8, 54, 9, 65, 70, 27, 91, 93, 72, 96, 18, 15, 14, 9, 72, 98, 81, 63, 91],
];

function greatestProduct(matrix) {
  let greatestProduct = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      // Check horizontal product
      if (j < matrix[0].length - 3) {
        let horizontalProduct = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (horizontalProduct > greatestProduct) {
          greatestProduct = horizontalProduct;
        }
      }

      // Check vertical product
      if (i < matrix.length - 3) {
        let verticalProduct = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        if (verticalProduct > greatestProduct) {
          greatestProduct = verticalProduct;
        }
      }
    }
  }

  return greatestProduct;
}

console.log(greatestProduct(matrix));




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
