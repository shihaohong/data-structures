var BinarySearchTree = function(value) {
  var newTree = Object.create(newTreeMethods);

  newTree.value = value;
  newTree.left = {};
  newTree.right = {};

  return newTree; 
};

var newTreeMethods = {};

newTreeMethods.insert = function(value, node = this) {
  if (node.value > value) { // value goes left
    if (Object.keys(node.left).length > 0) {
      this.insert(value, node.left);
    } else {  
      // create a node that connects to left of that tree
      node.left = {
        value: value,
        left: {},
        right: {}
      };
    }
  }
  if (node.value < value) { // value goes right
    if (Object.keys(node.right).length > 0) {
      this.insert(value, node.right);
    } else {  
      // create a node that connects to left of that tree
      node.right = {
        value: value,
        left: {},
        right: {}
      };
    }
  }
};

newTreeMethods.contains = function(value, node = this) {
  if (node.value > value) { // value goes left
    if (Object.keys(node.left).length > 0) {
      return this.contains(value, node.left);
    } else {  
      return false;
    }
  } else if (node.value < value) { // value goes right
    if (Object.keys(node.right).length > 0) {
      return this.contains(value, node.right);
    } else {  
      return false;
    }
  } else {
    return true;
  }
};

// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
newTreeMethods.depthFirstLog = function(cb, node = this) {
  // alter top node
  cb(node.value);
  // check left to see if there is a left, and then alter it if it exists
  if (Object.keys(node.left).length > 0) {
    this.depthFirstLog(cb, node.left);
  }
  // check right to see if there is a right, and then alter it if it exists
  if (Object.keys(node.right).length > 0) {
    this.depthFirstLog(cb, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  O(log n) for all functions because its a binary search
 */