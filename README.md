# javascript-cardio


[![Build Status](https://travis-ci.com/HDTran/javascript-cardio.svg?branch=master)](https://travis-ci.com/HDTran/javascript-cardio)

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

## Folders

### Trees
* [``/bstree``](https://github.com/HDTran/javascript-cardio/tree/master/bstree). Implement a Node class to represent a binary search tree with the insert method.
* [``/bstree-validate``](https://github.com/HDTran/javascript-cardio/tree/master/bstree-validate). Validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent.
* [``/tree``](https://github.com/HDTran/javascript-cardio/tree/master/tree). Implement Tree and Node classes with tree-traversals with breadth-first and depth-first traversals.
* [``/tree-levelwidth``](https://github.com/HDTran/javascript-cardio/tree/master/tree-levelwidth). Determine the width of the tree at each level given a root node.

### Linked Lists
* [``/linkedlist``](https://github.com/HDTran/javascript-cardio/tree/master/linkedlist). Implement a LinkedList class with ``size()``, ``clear()``, ``getFirst()``, ``insertFirst()``, ``removeFirst()``, ``getLast()``, ``insertLast()``, ``removeLast()``, ``getAt()``, ``insertAt()``, and ``removeAt()`` functions.
* [``/linkedlist-circular``](https://github.com/HDTran/javascript-cardio/tree/master/linkedlist-circular). Check whether a linked list is circular or not.
* [``/linkedlist-fromlast``](https://github.com/HDTran/javascript-cardio/tree/master/linkedlist-fromlast). Return the element ``n`` spaces from the last node in the list. Do not call the 'size' method of the linked list, assume that ``n`` will always be less than the length of the list.
* [``/linkedlist-midpoint``](https://github.com/HDTran/javascript-cardio/tree/master/linkedlist-midpoint). Return the 'middle' node of a linked list. If the list has an even number of elements, return the node at the end of the first half of the list. *Do not* use a counter variable, *do not* retrieve the size of the list, and only iterate through the list one time.

### Queues and Stacks
* [``/queue``](https://github.com/HDTran/javascript-cardio/tree/master/queue). Implement a Queue data structure class with an ``add()`` and ``remove()`` function.
* [``/queue-from-stack``](https://github.com/HDTran/javascript-cardio/tree/master/queue-from-stack). Implement a Queue data structure class using two stacks with an ``add()``, ``remove()``, and ``peek()`` function.
* [``/queue-weave``](https://github.com/HDTran/javascript-cardio/tree/master/queue-weave). Weave two queues by alternating removes between them into another queue, ignoring undefined values.
* [``/stack``](https://github.com/HDTran/javascript-cardio/tree/master/stack). Implement a Stack class with ``push()``, ``pop()``, and ``peek()`` methods.

### Strings
* [``/anagrams``](https://github.com/HDTran/javascript-cardio/tree/master/anagrams). Check to see if two provided strings are anagrams (if both strings use the same characters in the same quantity).
* [``/max-char``](https://github.com/HDTran/javascript-cardio/tree/master/max-char). Return the character most used by a string.
* [``/palindrome``](https://github.com/HDTran/javascript-cardio/tree/master/palindrome). Check if a string is a palindrome (the same forwards and back).
* [``/reverse-int``](https://github.com/HDTran/javascript-cardio/tree/master/reverse-int). Reverse the numbers of an integer as if it were a string (ex. ``reverseInteger(15) === 51``).
* [``/reverse-string``](https://github.com/HDTran/javascript-cardio/tree/master/reverse-string). Reverse the characters in a string.
* [``/titlecase``](https://github.com/HDTran/javascript-cardio/tree/master/titlecase). Titlecase a string of words.
* [``/vowels``](https://github.com/HDTran/javascript-cardio/tree/master/vowels). Count the number of vowels in a string.

### Arrays
* [``/chunk``](https://github.com/HDTran/javascript-cardio/tree/master/chunk). Divide an array into many subarrays where each subarray is of length size defined by the chunk (ex. ``chunk([1,2,3,4],2) => [[1,2],[3,4]]``).
* [``/matrix-spiral``](https://github.com/HDTran/javascript-cardio/tree/master/matrix-spiral). Write a function that accepts integer ``n`` and returns ``n*n`` spiral matrix where the numbers are spiraling clockwise from outside-in.

### Sorting
* [``/sorting``](https://github.com/HDTran/javascript-cardio/tree/master/sorting). Implement bubbleSort, selectionSort, and mergeSort.

### Misc
* [``/fibonacci``](https://github.com/HDTran/javascript-cardio/tree/master/fibonacci). Prints out the nth entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceding two. The sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series (ex. ``fibonacci(4) === 3``).
* [``/fizzbuzz``](https://github.com/HDTran/javascript-cardio/tree/master/fizzbuzz). Console logs the numbers from 1 to n, but for multiples of three, print "fizz" instead of the number and for the multiples of five, print "buzz". For multiples of both, print "fizzbuzz" (ex. ``fizzbuzz(5) => 1, 2, fizz, 4, buzz``).
* [``/js-events``](https://github.com/HDTran/javascript-cardio/tree/master/js-events). Create an 'eventing' library out of the Events class.  The Events class should have methods 'on', 'trigger', and 'off'.
* [``/pyramid-steps``](https://github.com/HDTran/javascript-cardio/tree/master/pyramid-steps). Write a function that accepts integer ``n`` and consoles a picture of a pyramid of ``n`` levels with ``#`` in the middle and spaces on the left and right.
* [``/steps``](https://github.com/HDTran/javascript-cardio/tree/master/steps). Write a function that accepts a positive intenger ``n`` and consoles a staircase with ``n`` levels with ``#`` character.