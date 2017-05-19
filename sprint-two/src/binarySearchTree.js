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
  if (node.value < value) { // value goes left
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

newTreeMethods.contains = function() {

};

newTreeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
A .left property, a binary search tree (BST) where all values are lower than than it the current value.
A .right property, a BST where all values are higher than than it the current value.
A .insert() method, which accepts a value and places in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
*/