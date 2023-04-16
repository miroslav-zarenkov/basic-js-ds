const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(element) {
    let newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    const poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.data;
  }

  peek() {
    return this.top.data;
  }
}

module.exports = {
  Stack,
};
