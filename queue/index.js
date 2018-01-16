// implement a queue
// const q = new Queue();
// q.add(1);
// q.remove(); // returns 1

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.shift();
  }
}

module.exports = Queue;