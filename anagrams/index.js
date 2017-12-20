// Check to see if two provided strings are anagrams
// One string is an anagram of another if it uses the same characters in the same quantity
// Only consider characters, not spaces or punctuation--case insensitive
// anagrams('RAIL! SAFETY!', 'fairy tales') => True
function anagrams(strA, strB) {
  strA = strA.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');
  strB = strB.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');

  if(strA.length !== strB.length) {
    return false;
  }

  const objA = {}, objB = {};
  for(let element of strA) {
    if(!objA[element]) {
      objA[element] = 1;
    } else {
      objA[element]++;
    }
  }
  for(let element of strB) {
    if(!objB[element]) {
      objB[element] = 1;
    } else {
      objB[element]++;
    }
  }

  for(let key in objA) {
    if(objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

// alternative with helper function
function anagramsWithHelper(strA, strB) {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for(let key in charMapA) {
    if(charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for(let char of str.replace(/[^a-zA-Z0-9]+/g).toLowerCase()) {
    if(!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  return charMap;
}

// alternative with string 
function anagramsWithString(strA, strB) {
  const arrA = strA.replace(/[^a-zA-Z0-9]+/g).toLowerCase().split('').sort().join('');
  const arrB = strB.replace(/[^a-zA-Z0-9]+/g).toLowerCase().split('').sort().join('');

  return arrA == arrB;
}

module.exports = anagrams;