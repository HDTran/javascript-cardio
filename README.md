# javascript-cardio
Huy's testing ground for small JavaScript exercises. Many of the exercises also include test cases that can be run with Jest.

## Installation for testing
```sh
npm install
npm test
```

## Testing individual folders
```sh
npm install -g jest
jest <folder-name>
```

## Folder contents

* [``/anagrams``](https://github.com/HDTran/javascript-cardio/tree/master/anagrams). Check to see if two provided strings are anagrams (if both strings use the same characters in the same quantity).
* [``/bstree``](https://github.com/HDTran/javascript-cardio/tree/master/bstree). Implement a Node class to represent a binary search tree with the insert method.
* [``/bstree-validate``](https://github.com/HDTran/javascript-cardio/tree/master/bstree-validate). Validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent.
* [``/chunk``](https://github.com/HDTran/javascript-cardio/tree/master/chunk). Divide an array into many subarrays where each subarray is of length size defined by the chunk (ex. ``chunk([1,2,3,4],2) => [[1,2],[3,4]]``).