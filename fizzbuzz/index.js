// Write a program that console logs the numbers from 1 to n.
// But for multiples of three, print "fizz" instead of the number
// and for the multiples of five, print "buzz"
// For multiples of both, print "fizzbuzz"
// Example: fizzbuzz(5) => 1, 2, fizz, 4, buzz
function fizzbuzz(number) {
  for(let i = 1; i <= number; i++) {
    if(i%3 === 0 && i%5 === 0) {
      console.log('fizzbuzz');
    } else if(i%3 === 0) {
      console.log('fizz');
    } else if(i%5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzbuzz;