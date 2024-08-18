// Iteration #1: Find the maximum
function maxOfTwoNumbers(a,b) {
   if(a > b){
    return a
   }else{
    return b
   }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if(words.length === 0){
    return null
  }else{

    return words.sort((a,b)=>b.length - a.length)[0];
  }
} 


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for(let i =0 ; i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
// should return: 57
// Iteration #3.1 Bonus:

function sum(mixedArr) {
  if(mixedArr.length === 0){
    return 0
  
  } 
    else{

    return mixedArr.map((value)=>{
     if(typeof value === 'object' || typeof value === 'array'){

      throw new Error("Unsupported data type sir or ma'am") 
     }else
      if(typeof value === "string"){
        return value.length 
      }else if(value === true){ 
        return 1  
      }else if(value === false){
        return 0  
      }else{
        return value  
      }
    }).reduce((acc,rec)=>acc+rec,0)
  }
    // } 

    // let res = []
    // let sum = 0;
    //   for(let i = 0; i< mixedArr.length ; i++){
    //     if(typeof mixedArr[i] === "string"){
    //             res.push(mixedArr[i].length)
    //           }else if(mixedArr[i] === true){ 
    //             res.push(1)
    //           }else if(mixedArr[i] === false){
    //             res.push(0)
    //           }else{
    //             res.push(mixedArr[i])
    //           }
    //   }
    //   for(let i =0;i<res.length;i++){
    //     sum+=res[i]
    //   }
    //   return sum
  }

// console.log(sum());


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  if(numbersAvg.length === 0){
    return null
  }else{

    return (numbersAvg.reduce((acc,rec)=>acc+rec,0))/numbersAvg.length
  }
    
  // let avg = numbersAvg.reduce((acc,rec)=>{
  //   return acc+rec
  // },0)

  
  // console.log(avg/numbersAvg.length);
}



// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) { 
  if(wordsArr.length === 0){
return null
  }else{

  //   let avgstr = wordsArr.map(word=>word.length).reduce((acc,rec)=>{
  //     return acc+rec
  // },0)
  // console.log(avgstr/wordsArr.length)


  return (wordsArr.map(word=>word.length).reduce((acc,rec)=>{
        return acc+rec
    },0))/wordsArr.length
}
}


// Bonus - Iteration #4.1
function avg(mixedArr) {
  if(mixedArr.length === 0){
return null
  }else{

    return (mixedArr.map(val=>{
      if(typeof val === 'string'){
        return val.length
      }else if(val === true){
        return 1
      }else if(val === false){
        return 0
      }else{
        return val
      }
    }).reduce((acc,rec)=>acc+rec,0))/mixedArr.length
  }
}
// console.log(avg()/mixedArr.length); 

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

function uniquifyArray(arr) {

// let set = new Set(wordsUnique)
// // console.log(set);

// let res_Arr = []
// for (const key of set) {
//   res_Arr.push(key)
// }
// console.log(res_Arr);
if(arr.length === 0){
  return null
}else{

  let unique = []
  for(let i = 0; i<arr.length;i++){
    
    if(unique.indexOf(arr[i])=== -1){
    unique.push(arr[i])
  }
}
return unique
}
 }

// console.log(uniquifyArray(wordsUnique));



// Iteration #6: Find elements
  const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

  function doesWordExist(wordsFind,value) {
    
  if(wordsFind.length === 0){
    return null
  }else{

    for(let i = 0; i<wordsFind.length ; i++){
      if(wordsFind[i] === value){
      return true

      } 
    }
    return false
  }
  }
  // console.log(doesWordExist(wordsFind,'trouble'));



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

function howManyTimes(wordsCount,search) {


let res_arr = []
    wordsCount.forEach((word)=>{
    if(word === search)
      {
        res_arr.push(word)
      }
        
   }) 
   return res_arr.length  
  
}
// console.log(howManyTimes(wordsCount,'matter'));



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

function greatestProduct(arr) {
let maxProduct = 0
  for(let i = 0 ; i < arr.length;i++){
    
    for(let j = 0 ; j < arr[i].length ; j++){

      if(j <= arr[i].length - 4)  {         
        let horizontalProduct = arr[i][j]*arr[i][j+1]*arr[i][j+2]*arr[i][j+3];
        if(horizontalProduct > maxProduct){
          maxProduct = horizontalProduct
        }
      }

      if(i <=  arr.length-4){                         
        let verticalProduct = arr[i][j]*arr[i+1][j]*arr[i+2][j]*arr[i+3][j];
        if(verticalProduct > maxProduct){
          maxProduct = verticalProduct  
        }
      }


    if (i <= arr.length - 4 && j <= arr[i].length - 4) {
        let diagonalRightProduct = arr[i][j] * arr[i + 1][j + 1] * arr[i + 2][j + 2] * arr[i + 3][j + 3];
        if (diagonalRightProduct > maxProduct) {
          maxProduct = diagonalRightProduct;
        }
      }

      // Check diagonally to the bottom-left
      if (i <= arr.length - 4 && j >= 3) {
        let diagonalLeftProduct = arr[i][j] * arr[i + 1][j - 1] * arr[i + 2][j - 2] * arr[i + 3][j - 3];
        if (diagonalLeftProduct > maxProduct) {
          maxProduct = diagonalLeftProduct;
        }
      }
    }
  }

  return maxProduct;
} 

// console.log(greatestProduct(matrix));


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
