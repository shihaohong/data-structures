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
  var existingEdges = this.edges[node];


  // call removeEdge for every possible edge within the edges array
  for (let i = 0; i < existingEdges.length; i++) {
    this.removeEdge(node, existingEdges[i]);
  }

  // removes node and also the edges for that node
  this.vertices.splice(this.vertices.indexOf(node), 1);
  this.edges.splice(node, 1);
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if a node doesn't exist to begin with, return false immediately
  if (this.edges[toNode] === undefined && this.edges[fromNode]) {
    return false;
  }

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
  // array deletion 
  // check toNode for the edge and delete it if its found
    // look for fromNode in edge.toNode array
  for (let i = 0; i < this.edges[toNode].length; i++) {
    if (this.edges[toNode][i] === fromNode) {
      // found node! if its the last object, you just pop your array, else you
      if (i === this.edges[toNode].length - 1) {
        this.edges[toNode].pop();
      } else {
      // you gotta shift everything down AFTER node finding
        for (let j = i; j < this.edges[toNode].length - 1; j++) {
          this.edges[toNode][j] = this.edges[toNode][j + 1];
        }
      }
    }
  }
  // check fromNode for the edge and delete if its found
  for (let i = 0; i < this.edges[fromNode].length; i++) {
    if (this.edges[fromNode][i] === toNode) {
      // found node! if its the last object, you just pop your array, else you
      if (i === this.edges[fromNode].length - 1) {
        this.edges[fromNode].pop();
      } else {
      // you gotta shift everything down AFTER node finding
        for (let j = i; j < this.edges[fromNode].length - 1; j++) {
          this.edges[fromNode][j] = this.edges[fromNode][j + 1];
        }
      }
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.vertices.length; i++) {
    cb(this.vertices[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


