const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordArray) {
  if (wordArray.length === 0) {
    return null;
  } else {
    let maxNum = 0;
    let objOfWordsLen = {};
    for (let idx = 0; idx < wordArray.length; idx++) {
      maxNum = Math.max(maxNum, wordArray[idx].length);
    }


    //  if (wordArray[idx].length === maxNum) {
    //   return wordArray[idx];
    // }
  }
}

console.log(findLongestWord(words) + ' undefined?');
