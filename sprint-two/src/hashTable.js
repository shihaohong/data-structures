

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var duplicateFound = false;
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        duplicateFound = true;
      }
      if (!duplicateFound) {
        bucket.push([k, v]);
      }
      
      this._storage.set(index, bucket);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index); 

  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var bucketLength = bucket.length;

  if (bucket !== undefined) {
    for (let i = 0; i < bucketLength; i++) {
      if (bucket[i][0] === k) {
        delete bucket[i];
        if (bucket.length === 1) {
          bucket = undefined;
        }
      }
    }
  }

  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 all functions have O(1) complexity

*/


