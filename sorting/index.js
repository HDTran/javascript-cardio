// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        let greater = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = greater;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }
    if(i !== indexOfMin) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser; 
    }
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // both left and right at this point should be exclusively empty because of while loop
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
