// Print out the nth entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where each number is the sum of the preceding two.
// For example: The sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.
// fibonacci(4) === 3
function fibonacci(n) {
  const result = [0, 1];

  for(let i = 0; i < n; i++) {
    result.push(result[result.length-2] + result[result.length-1]);
  }

  return result[n];
}

// alternate solution, recursive
// weakness is how slow it is--exponential runtime O(2^n) versus iterative time is O(n)
function fibonacciRecursive(n) {
  if(n < 2) {
    return n;
  }

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2); 
}

// alternate solution, recursive with memoization
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fibonacciRecursiveMemoize(n) {
  if(n < 2) {
    return n;
  }

  return fibonacciMemoize(n-1) + fibonacciMemoize(n-2); 
}

const fibonacciMemoize = memoize(fibonacciRecursiveMemoize);

module.exports = fibonacciMemoize;