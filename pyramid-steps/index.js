// Pyramid function accepts positive number N, should console
// N levels with # in the middle and spaces on the left and right
// examples: pyramid(1)
// '#'
// pyramid(2)
// ' # '
// '###'
// pyramid(3)
// '  #  '
// ' ### '
// '#####'
function pyramid(n) {
  const midpoint = Math.floor(((n*2)-1)/2);

  for(let row = 0; row < n; row++) {
    let resultStr = '';
    for(let column = 0; column < (n*2)-1; column++) {
      if(column < midpoint - row || column > midpoint + row) {
        resultStr += ' ';
      } else {
        resultStr += '#';
      }
    }

    console.log(resultStr);
  }
}

function pyramidRecursive(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(stair.length === (n*2)-1) {
    console.log(stair);
    return pyramidRecursive(n, row + 1);
  } else {
    const midpoint = Math.floor(((n*2)-1)/2);
    if(stair.length < midpoint - row || stair.length > midpoint + row) {
      return pyramidRecursive(n, row, stair += ' ');
    }
    else {
      return pyramidRecursive(n, row, stair += '#');
    }
  }
}

module.exports = pyramidRecursive;