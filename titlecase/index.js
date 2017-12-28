// Write a function that capitalizes the first letter of each word in the string
// capitalize('look, it is working!) => "Look, It Is Working"
function titlecase(str) {
  return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// alternate without array.map()
function titlecaseWithoutMap(str) {
  const words = [];

  for(let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// alterate by traversal
function titlecaseTraversal(str) {
  let resultStr = str[0].toUpperCase();

  for(let i = 1; i < str.length; i++) {
    if(str[i-1] === ' ') {
      resultStr += str[i].toUpperCase();
    } else {
      resultStr += str[i];
    }
  }

  return resultStr;
}

module.exports = titlecase;