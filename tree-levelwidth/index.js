// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const result = [0];
  const process = [root, 'break'];

  while(process.length > 1) {
    let node = process.shift();

    if(node !== 'break') {
      result[result.length-1]++;
      process.push(...node.children);
    } else if(node === 'break') {
      process.push(node);
      result.push(0);
    }
  }

  return result;
}

module.exports = levelWidth;
