// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edges[node] = []; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.vertices.length; i++ ) {
    if ( node === this.vertices[i] ) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.vertices.splice(this.vertices.indexOf(node), 1);
  this.edges.splice(node, 1);
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // initialize two flags
  var flag1 = false;
  var flag2 = false;
  
  // check fromNode and see if it has an edge to toNode
  for (var i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      flag1 = true;
    }
  }

  // check toNode to see if it has fromNode
  for (var i = 0; i < this.edges[toNode].length; i++) {
    if (this.edges[toNode][i] === fromNode) {
      flag2 = true;
    }
  }

  // check if both flags are true
  if (flag1 && flag2) {
    return true;
  } 
  return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push other nodes value to current nodes storage
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode); 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


