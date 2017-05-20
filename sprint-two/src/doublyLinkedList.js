var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.head = list.head;
      list.head.prev = node;
      list.head = node;
    }

  };

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      node.prev = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.removeTail = function() {
    var oldTail = list.tail.value;
    list.tail = list.tail.prev;
    return oldTail;
  };

  list.contains = function(target) {
    var node = list.head;   
    while (node !== null) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail: O(1)
  addToHead: O(1)
  removeHead: O(1)
  removeTail: O(1)
  contains: O(n)
 */