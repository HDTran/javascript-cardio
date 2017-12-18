// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// chunk([1, 2, 3, 4], 2) => [[1,2], [3,4]]
function chunk(arr, size) {
  const returnArr = [];

  for(let i = 0; i < arr.length; i += size) {
    returnArr.push(arr.slice(i, i + size));
  }

  return returnArr;
}

// alternate solution -- full traversal with for
function chunkTraversal(arr, size) {
  const returnArr = [];
  let currentArr = [];

  for(let i = 0; i < arr.length; i++) {
    currentArr.push(arr[i]);
    if(currentArr.length >= size || i === arr.length-1) {
      returnArr.push(currentArr);
      currentArr = [];
    }
  }

  return returnArr;
}

// alternate solution -- full traversal with for of
function chunkTraversalForOf(arr, size) {
  const returnArr = [];

  for(let element of arr) {
    const last = returnArr[returnArr.length-1];

    if(!last || last.length === size) {
      returnArr.push([element]);
    } else {
      last.push(element);
    }
  }

  return returnArr;
}

module.exports = chunk;