const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.r = null;
  }
  root() {
    return this.r;
    
  }

  add(data) {
    let newNode = new Node(data);
        if (this.r === null) {
            this.r = newNode;
        } else {
            let currentNode = this.r;
            while (true) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (data > currentNode.data) {
                        if (!currentNode.right) {
                            currentNode.right = newNode;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
    }
  }

  has(data) {
    if (!this.r) { 
      return null;
    };

    let current = this.r;
    const loop = true;

    while (loop) {
      if (!current) {
        return false; 
      };
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.r;

    while (current) {
      
      if (current.data === data) { 
        return current;
      } 

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      
    }
    if (current !== data) { return null };
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.r) { 
      return; 
    }
    
    let node = this.r; 

    while (node.left) {
      node = node.left;
    }

    return node.value;
    }
  

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};