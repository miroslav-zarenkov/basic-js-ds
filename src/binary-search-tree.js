const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    //console.debug(this.rootElement);
    return this.rootElement;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootElement) {
      this.rootElement = newNode;
      return;
    }

    let currNode = this.rootElement;

    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    return has(this.rootElement, data);

    function has(node, data) {
      if (node === null) return false;
      if (node.data < data) return has(node.right, data);
      if (node.data > data) return has(node.left, data);
      if (node.data === data) return true;
    }
  }

  find(data) {
    return find(this.rootElement, data);

    function find(node, data) {
      if (node === null) return null;
      if (node.data < data) return find(node.right, data);
      if (node.data > data) return find(node.left, data);
      if (node.data === data) return node;
    }
  }

  remove(data) {
    this.rootElement = deleteNode(this.rootElement, data);

    function deleteNode(node, data) {
      if (node === null) return null;
      if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      }
      if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      }
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      const minElement = findMinElement(node.right);
      node.data = minElement.data;
      node.right = deleteNode(node.right, minElement.data);
      return node;
    }

    function findMinElement(node) {
      if (node === null) return null;
      if (node.left === null) {
        return node;
      } else {
        return findMinElement(node.left);
      }
    }
  }

  min() {
    const minElement = findMinElement(this.rootElement);

    function findMinElement(node) {
      if (node === null) return null;
      if (node.left === null) {
        return node;
      } else {
        return findMinElement(node.left);
      }
    }
    return minElement.data;
  }

  max() {
    const maxElement = findMaxElement(this.rootElement);

    function findMaxElement(node) {
      if (node === null) return null;
      if (node.right === null) {
        return node;
      } else {
        return findMaxElement(node.right);
      }
    }
    return maxElement.data;
  }
}

module.exports = {
  BinarySearchTree,
};
