function isPalindrome(word) {
  // Two-pointer approach to check if the word is a palindrome
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }
  
  return true; // If loop completes, the word is a palindrome
}

/* 
  Pseudocode:
  - Initialize two pointers: one at the start (left) and one at the end (right) of the word.
  - While left pointer is less than right pointer:
    - Compare characters at left and right positions.
    - If they don’t match, return false (not a palindrome).
    - Move left pointer forward and right pointer backward.
  - If the loop completes, return true (it is a palindrome).
*/

/*
  Explanation:
  - The function checks whether a given word reads the same forward and backward.
  - Using a two-pointer approach, it compares characters from both ends of the string.
  - If all characters match, the function returns `true`; otherwise, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));
}

module.exports = isPalindrome;
