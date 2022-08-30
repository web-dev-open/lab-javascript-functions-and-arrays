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

function sumNumbers(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 0) {
    return 0;
  } else if (nums.length > 1) {
    {
      let sunOfNums = 0;
      for (let idx = 0; idx < nums.length; idx++) {
        sunOfNums = sunOfNums + nums[idx];
      }
      return sunOfNums;
    }
  }
}

console.log(sumNumbers(numbers));
