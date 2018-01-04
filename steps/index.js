// Write a function that takes a positive number N
// console.log a step shape with N levels with # character
// Make sure the step has spaces on the right hand side
// ex: steps(2)
// '# '
// '##'
// ex. steps(4)
// '# '
// '##'
// '### '
// '####'
function steps(n) {
  for(let i = 0; i < n; i++) {
    let resultStr = '';
    for(let j = 0; j < n; j++) {
      if(j <= i) {
        resultStr += '#';
      } else {
        resultStr += ' ';
      }
    }
    console.log(resultStr);
  }
}

// alternate solution--recursive instead of iterative
function stepsRecursive(n, row = 0, stair = '') {
  if(n === row) {
    return;
  }

  if(n === stair.length) {
    console.log(stair);
    return stepsRecursive(n, row + 1);
  }

  if(stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  return stepsRecursive(n, row, stair);
}

module.exports = steps;