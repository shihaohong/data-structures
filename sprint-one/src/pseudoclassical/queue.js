var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var popVal = this.storage[0];
    this.counter--;
    for (let i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.counter];

    return popVal;
  }
};

Queue.prototype.size = function() {
  return this.counter;
};
