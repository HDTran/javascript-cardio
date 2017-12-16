// Given a string, return the character most commonly used in string
function maxChar(str) {
  let characterMap = new Map();

  let characters = str.split('');
  for(let character of characters) {
    if(characterMap.has(character)) {
      characterMap.set(character, characterMap.get(character)+1);
    } else {
      characterMap.set(character, 1);
    }
  }

  let frequentChar = {
    character: '',
    frequency: 0
  }

  characterMap.forEach((value, key) => {
    if(value > frequentChar.frequency) {
      frequentChar.frequency = value;
      frequentChar.character = key;
    }
  });

  return frequentChar.character;
}

// alternate solution -- loop for of
function maxCharByLoop(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    if(!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;