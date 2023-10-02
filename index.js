// const inputString = "1.1.1.1.1";
// const outputString = inputString.replace(/\./g, "[.]");
// console.log(outputString); // 1[.]1[.]1[.]1

// const word = "I'm going to go home";
// const lastWord = word.split(" ").pop();
// const numberOfLetters = lastWord.length;

// console.log(`${lastWord}'s word count is => ${numberOfLetters}`); // home => 4

function isPalindrome(word = "") {
  console.log(
    word === word.split("").reverse().join("") ? "Palindrome" : "Not Palindrome"
  );
}

isPalindrome("kiyik");

const word = "Hheee";
