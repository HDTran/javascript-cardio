// weave two queues by alternating removes between them into another queue, ignore undefined
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const resultQueue = new Queue();

  while(typeof sourceOne.peek() !== 'undefined' && typeof sourceTwo.peek() !== 'undefined') {
    if(typeof sourceOne.peek() !== 'undefined') {
      resultQueue.add(sourceOne.remove());
    }
    if(typeof sourceTwo.peek() !== 'undefined') {
      resultQueue.add(sourceTwo.remove());
    }
  }

  return resultQueue;
}

module.exports = weave;
