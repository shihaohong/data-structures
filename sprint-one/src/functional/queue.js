var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      var dequeue = storage[0];
      counter--;
      for (var i = 0; i < counter; i++) {
        storage[i] = storage[i + 1];
      }

      delete storage[counter];
      return dequeue;
    } 
    
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
