var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item];
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  add, contain and remove all have O(1) complexity
 */
