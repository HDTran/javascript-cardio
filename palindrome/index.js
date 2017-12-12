// Given a string, return true/false if string is a palindrome (same forwards and backwards).
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

// Alternate solution -- every() array helper
// Improvements can be made so that duplicate checks don't happen at the halfway point
function palindromeByEveryHelper(str) {
  return str.split('').every((element, index) => {
    return element === str[str.length-index-1];
  });
}

module.exports = palindrome;