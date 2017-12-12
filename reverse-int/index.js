// Given an integer, return an integer that is the reverse ordering of numbers.
// reverseInteger(15) === 51
// reverseInteger(500) === 5
// reverseInteger(-981) === -189
function reverseInteger(integer) {
  return parseInt((integer*Math.sign(integer)).toString().split('').reverse().join(''))*Math.sign(integer);
}

module.exports = reverseInteger;