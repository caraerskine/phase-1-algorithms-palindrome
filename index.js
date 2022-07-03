// the function below receives one argument, a string. 
//returns true if a palindrome, false if not
// 

function isPalindrome(word) {
  // Write your algorithm here
  if(word.split("").reverse().join("")
  === word) {
    return true
  } else {
    return false
  }
}



/* 
  Add your pseudocode here
  // I need it to read the word forwards, like normal, and then backwards
  //this will allow it to check if it is indeed a palindrome
  //or use some kind of mirror function?

  //with my code, I am saying that using the argument "word" with 
  .split -will split the string into a list, so each word becomes it's own string.
  .reverse -reverses an array in place, like
in my pseudocode I was thinking "hey, can i mirror this?"
  .join will join the elements in a string.

*/ 


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
