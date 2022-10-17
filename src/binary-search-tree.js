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

  remove(data) {
    this.r = removeN(this.r, data);

    function removeN(treenode, data) {
      if (!treenode) {
        return null;
      }

      if (data < treenode.data) {
        treenode.left = removeN(treenode.left, data);
        return treenode;
      } else if (treenode.data < data) {
        treenode.right = removeN(treenode.right, data);
        return treenode;
      } else {
        if (!treenode.left && !treenode.right) {
          return null;
        }

        if (!treenode.left) {
          treenode = treenode.right;
          return treenode;
        }

        if (!treenode.right) {
          treenode = treenode.left;
          return treenode;
        }

        let minRight = treenode.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        treenode.data = minRight.data;

        treenode.right = removeN(treenode.right, minRight.data);
        return treenode;
      }
    }
  }

  min() {
    if (!this.r) { 
      return; 
    }
    
    let treenode = this.r; 

    while (treenode.left) {
      treenode = treenode.left;
    }

    return treenode.data;
    }
  

  max() {
    if (!this.r) {
      return;
    }

    let treenode = this.r;

    while (treenode.right) {
      treenode = treenode.right;
    }

    return treenode.data;
  }
}

module.exports = {
  BinarySearchTree
};