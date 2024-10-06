/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
  
    function depth(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1; // leaf node
  
      // if one child is null, we consider only the other child for depth
      if (!node.left) return depth(node.right) + 1;
      if (!node.right) return depth(node.left) + 1;
  
      // return the minimum depth of the children
      return Math.min(depth(node.left), depth(node.right)) + 1;
    }
  
    return depth(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
  
    function depth(node) {
      if (!node) return 0;
      return Math.max(depth(node.left), depth(node.right)) + 1;
    }
  
    return depth(this.root);
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = { max: -Infinity };
  
    function findMaxSum(node) {
      if (!node) return 0;
  
      const leftSum = Math.max(0, findMaxSum(node.left));
      const rightSum = Math.max(0, findMaxSum(node.right));
  
      const localMax = node.val + leftSum + rightSum;
      result.max = Math.max(result.max, localMax);
  
      return node.val + Math.max(leftSum, rightSum);
    }
  
    findMaxSum(this.root);
    return result.max;
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;
  
    function search(node) {
      if (!node) return;
      
      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }
  
      search(node.left);
      search(node.right);
    }
  
    search(this.root);
    return result;
  }
  

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root) return false;
  
    function getDepthAndParent(node, val, depth = 0, parent = null) {
      if (!node) return null;
  
      if (node.val === val) return { depth, parent };
  
      return (
        getDepthAndParent(node.left, val, depth + 1, node) ||
        getDepthAndParent(node.right, val, depth + 1, node)
      );
    }
  
    const node1Info = getDepthAndParent(this.root, node1);
    const node2Info = getDepthAndParent(this.root, node2);
  
    return (
      node1Info && node2Info &&
      node1Info.depth === node2Info.depth &&
      node1Info.parent !== node2Info.parent
    );
  }
  

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize(tree) {
    const values = [];
  
    function preOrder(node) {
      if (!node) {
        values.push("null");
        return;
      }
  
      values.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
  
    preOrder(tree.root);
    return values.join(",");
  }

  
  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize(stringTree) {
    const values = stringTree.split(",");
    let index = 0;
  
    function buildTree() {
      if (values[index] === "null") {
        index++;
        return null;
      }
  
      const node = new BinaryTreeNode(+values[index]);
      index++;
      node.left = buildTree();
      node.right = buildTree();
  
      return node;
    }
  
    const root = buildTree();
    return new BinaryTree(root);
  }
  

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
