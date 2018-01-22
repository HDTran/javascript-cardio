// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// queue is first in at end (push), first out (shift)
// stack is first in at end (push), last out (pop)
// using two stacks, you probably need to pop one off and to another temporarily and then pop one back in

const Stack = require('./stack');

class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.tempStack = new Stack();
  }

  add(item) {
    this.mainStack.push(item);
  }

  peek() {
    while(typeof this.mainStack.peek() !== 'undefined') {
      this.tempStack.push(this.mainStack.pop());
    }
    let result = this.tempStack.peek();
    while(typeof this.tempStack.peek() !== 'undefined') {
      this.mainStack.push(this.tempStack.pop());
    }
    return result;
  }

  remove() {
    while(typeof this.mainStack.peek() !== 'undefined') {
      this.tempStack.push(this.mainStack.pop());
    }
    let result = this.tempStack.pop();
    while(typeof this.tempStack.peek() !== 'undefined') {
      this.mainStack.push(this.tempStack.pop());
    }
    return result;
  }
}

module.exports = Queue;
