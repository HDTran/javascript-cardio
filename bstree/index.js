// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let node = this.data;

    if(data < node && this.left === null) {
      this.left = new Node(data);
    } else if(data < node && this.left !== null) {
      this.left.insert(data);
    } else if(data > node && this.right === null) {
      this.right = new Node(data);
    } else if(data > node && this.right !== null) {
      this.right.insert(data);
    }
  }

  contains(data) {
    if(data === this.data) {
      return this;
    } else if(data < this.data && this.left !== null) {
      return this.left.contains(data);
    } else if(data < this.data && this.left === null) {
      return null;
    } else if(data > this.data && this.right !== null) {
      return this.right.contains(data);
    } else if(data > this.data && this.right === null) {
      return null;
    }
  }
}

module.exports = Node;