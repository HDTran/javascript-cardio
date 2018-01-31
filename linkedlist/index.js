// Implement classes Node and Linked Lists

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while(node !== null) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while(node.next !== null) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(this.head !== null) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    let node = this.head;
    if(this.head === null) {
      return;
    } else if(this.head.next === null) {
      this.head = null;
    } else {
      while(node.next.next !== null) {
        node = node.next;
      }
      node.next = null;
    }
  }

  insertLast(data) {
    if(this.head === null) {
      this.head = new Node(data);
    } else {
      this.getLast().next = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while(node !== null) {
      if(counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if(this.head === null) {
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.getAt(index-1);
    if(prevNode !== null && prevNode.next !== null) {
      if(prevNode.next.next !== null) {
        prevNode.next = prevNode.next.next;
      } else {
        prevNode.next = null;
      }
    }
  }

  insertAt(data, index) {
    if(this.head === null) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prevNode = this.getAt(index-1);
    if(prevNode === null) {
      prevNode = this.getLast();
    }
    prevNode.next = new Node(data, prevNode.next);
  }

  forEach(func) {
    if(this.head === null) {
      return;
    }

    let node = this.head;
    let index = 0;
    while(node) {
      func(node, index);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
