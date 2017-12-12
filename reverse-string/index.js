function reverseString(str) {
  return str.split('').reverse().join(''); // split and join with no delimiter
}

// alternate solution -- reverse by loop, using for of
function reverseStringByLoop(str) {
  let reversed = '';

  for(let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// alternate solution -- reduce() array helper
function reverseByHelper(str) {
  // reduce takes in function and starting value
  return str.split('').reduce((reversedChain, characterCurrent) => characterCurrent + reversedChain, '');
}

module.exports = reverseString;