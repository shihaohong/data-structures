var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    counter: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    if (this.counter > 0) {
      var dequeue = this.storage[0];
      this.counter--;
      for (let i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[this.counter];
      return dequeue;
    
    }
  },
  size: function() {
    return this.counter;
  }
};


