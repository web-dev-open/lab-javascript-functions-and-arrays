// const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

// function findLongestWord(wordArray) {
//   if (wordArray.length === 0) {
//     return null;
//   } else {
//     let maxNum = 0;
//     let objOfWordsLen = {};
//     for (let idx = 0; idx < wordArray.length; idx++) {
//       maxNum = Math.max(maxNum, wordArray[idx].length);
//     }

//     //  if (wordArray[idx].length === maxNum) {
//     //   return wordArray[idx];
//     // }
//   }
// }

// console.log(findLongestWord(words) + ' undefined?');

//---------------------------------

//-Iteration:2 :

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function sumNumbers(nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   } else if (nums.length === 0) {
//     return 0;
//   } else if (nums.length > 1) {
//     {
//       let sunOfNums = 0;
//       for (let idx = 0; idx < nums.length; idx++) {
//         sunOfNums = sunOfNums + nums[idx];
//       }
//       return sunOfNums;
//     }
//   }
// }

// console.log(sumNumbers(numbers));

//Iteration 3: Bonus:

// Iteration #3.1 Bonus:
// const mixedArr = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}];

// function sum(mixArray) {
//   if (mixArray.length === 0) {
//     return 0;
//   } else if (mixArray.length === 1) {
//     if (typeof mixArray[0] === 'number') {
//       return mixArray[0];
//     }
//   }
//   let allElements = 0;
//   for (let idx = 0; idx < mixArray.length; idx++) {
//     if (mixArray[idx] === 0) {
//       return allElements;
//     }
//   }

//   let sunOfNums = 0;
//   for (let idx = 0; idx < mixArray.length; idx++) {
//     if (typeof mixArray[idx] === 'number') {
//       sunOfNums = sunOfNums + mixArray[idx];
//     } else if (typeof mixArray[idx] === 'string') {
//       sunOfNums = sunOfNums + mixArray[idx].length;
//     } else if (typeof mixArray[idx] === 'boolean') {
//       if (mixArray[idx] === true) {
//         sunOfNums = sunOfNums + 1;
//       } else {
//         sunOfNums = sunOfNums + 0;
//       }
//     } else if (typeof mixArray[idx] === 'object') {
//       console.log(mixArray[idx]);
//       console.log(typeof mixArray[idx]);
//       const error = Error('Its an object');
//       return error;
//     } else if (typeof mixArray[idx] === 'array') {
//       console.log(mixArray[idx]);
//       console.log(typeof mixArray[idx]);
//       // throw new Error('Its an array');
//       const error = Error('Its an Array');
//       return error;
//     }
//   }
//   return sunOfNums;
// }

function averageWordLength(someArray) {
  if (someArray.length === 0) {
    return null;
  } else if (someArray.length === 1) {
    return someArray[0].length;
  }
}

console.log(averageWordLength(['rootlearn']));
