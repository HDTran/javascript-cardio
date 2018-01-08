// A function that takes a string and returns number of vowels (aeiou)
function vowels(str) {
  let counter = 0;
  const vowelChecker = ['a', 'e', 'i', 'o', 'u'];

  for(let character of str.toLowerCase()) {
    if(vowelChecker.includes(character)) {
      counter++;
    }
  }

  return counter;
}

function vowelsByRegex(str) {
  let matchArr = str.match(/[aeiou]/gi);
  return matchArr === null ? 0 : matchArr.length;
}

module.exports = vowels;