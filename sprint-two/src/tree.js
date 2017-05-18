var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  let child = {};
  // create your child
  _.extend(child, treeMethods);
  child.value = value;
  child.children = [];

  // add the child to our tree
  this.children.push(child);
};

treeMethods.contains = function(target) {
  let node = this;  
  let search = function(node, result = []) {
    result.push(node.value);
    
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        search(node.children[i], result);
      }
    }
    return result;
  };
  
  result = search(node);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === target) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
    treeMethods.addChild: O(n^2)
    treeMethods.contains: O(c^n)
 */
