// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if(min !== null & node.data < min) {
    return false;
  } else if(max !== null & node.data > max) {
    return false;
  } else if(node.left !== null && node.right !== null) {
    return validate(node.left, min, node.data) && validate(node.right, node.data, max);
  } else if(node.left !== null) {
    return validate(node.left, min, node.data);
  } else if(node.right !== null) {
    return validate(node.right, node.data, max);
  } else {
    return true;
  }
}

module.exports = validate;
