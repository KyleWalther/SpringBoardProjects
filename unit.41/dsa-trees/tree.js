/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) return 0;
  
    function sum(node) {
      let total = node.val;
      for (let child of node.children) {
        total += sum(child);
      }
      return total;
    }
  
    return sum(this.root);
  }
  
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
  
    function count(node) {
      let count = node.val % 2 === 0 ? 1 : 0;
      for (let child of node.children) {
        count += count(child);
      }
      return count;
    }
  
    return count(this.root);
  }
  

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
  
    function count(node) {
      let total = node.val > lowerBound ? 1 : 0;
      for (let child of node.children) {
        total += count(child);
      }
      return total;
    }
  
    return count(this.root);
  }
  
}

module.exports = { Tree, TreeNode };
