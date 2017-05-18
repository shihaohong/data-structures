var Stack = function() {

  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    if (this.counter > 0) {
      this.counter--;
      var popVal = this.storage[this.counter];
      delete this.storage[this.counter];

      return popVal;
    }
  },

  size: function() {
    return this.counter;
  }
};