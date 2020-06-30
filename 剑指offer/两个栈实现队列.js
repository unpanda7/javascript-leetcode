var CQueue = function() {
  queue = []
};

/** 
* @param {number} value
* @return {void}
*/
CQueue.prototype.appendTail = function(value) {
  queue.push(value)
};

/**
* @return {number}
*/
CQueue.prototype.deleteHead = function() {
  if (queue.length > 0) {
      return queue.shift()
  } else {
      return -1
  }
};