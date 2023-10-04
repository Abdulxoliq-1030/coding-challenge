// const inputString = "1.1.1.1.1";
// const outputString = inputString.replace(/\./g, "[.]");
// console.log(outputString); // 1[.]1[.]1[.]1

// const word = "I'm going to go home";
// const lastWord = word.split(" ").pop();
// const numberOfLetters = lastWord.length;

// console.log(`${lastWord}'s word count is => ${numberOfLetters}`); // home => 4

// function isPalindrome(word = "") {
//   console.log(
//     word === word.split("").reverse().join("") ? "Palindrome" : "Not Palindrome"
//   );
// }

// isPalindrome("kiyik");

// const word = "Hheee";

// const arrowFunc = () => args.length; // ERROR
// console.log(arrowFunc(1, 2, 3));

// function hasDuplicated(nums) {
//   let obj = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in obj) {
//       return true;
//     } else {
//       obj[nums[i]] = true;
//     }
//   }
//   return false;
// }

// console.log(hasDuplicated([1, 2, 3, 4]));
// console.log(hasDuplicated([1, 2, 3, 1]));

// REMOVE DUPLICATES
// let array = ["A", "b", "c", "A"];
// let uniqueArray = removeDuplicates(array);

// function removeDuplicates(arr) {
//   let unique = {};
//   arr.forEach((i) => {
//     if (!unique[i]) {
//       unique[i] = true;
//     }
//   });
//   return Object.keys(unique);
// }

function twoNumberSum(array = [], target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return [array[left], array[right]];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [];
}
console.log(twoNumberSum([3, 4, 5, 6, 2, 11, 2], 10));
