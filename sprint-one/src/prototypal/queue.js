var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  dequeue: function() {
    if (this.counter > 0) {
      this.counter--;
      var dequeueValue = this.storage[0];
      for (let i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      delete this.storage[this.counter];
      return dequeueValue;

    }
  },

  size: function(size) {
    return this.counter;
  }
};


