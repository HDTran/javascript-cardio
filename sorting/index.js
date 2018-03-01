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

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
