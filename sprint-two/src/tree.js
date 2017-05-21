var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  let child = {};
  // create your child
  _.extend(child, treeMethods);
  child.value = value;
  child.children = [];
  child.parent = this;

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

// this function makes child.parent = null and pops child value 
treeMethods.removeFromParent = function(value) {
  let node = this;  

  let search = function(node) {
    if (node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].value === value) {
          node.children[i].parent = null;
          node.children.splice(i, 1);
        } else {
          search(node.children[i]);
        }
      }
    }
  };

  search(node);
};


/*
 * Complexity: What is the time complexity of the above functions?
    treeMethods.addChild: O(n^2)
    treeMethods.contains: O(n)
 */
