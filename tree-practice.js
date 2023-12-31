const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode.left && !rootNode.right) return rootNode.val;
  while (rootNode.left) {
    rootNode = rootNode.left
  }
  return rootNode.val
}

function findMaxBST(rootNode) {
  if (!rootNode.left && !rootNode.right) return rootNode.val;
  while (rootNode.right) {
    rootNode = rootNode.right
  }
  return rootNode.val
}

function findMinBT(rootNode) {
  if (!rootNode.left && !rootNode.right) return rootNode.val;
  let min = rootNode.val

  const traverse = rootNode => {
    rootNode.val < min ? min = rootNode.val : rootNode.val
    if (rootNode.left) traverse(rootNode.left)
    if (rootNode.right) traverse(rootNode.right)
    console.log(min)
  }
  traverse(rootNode)
  return min;

}

function findMaxBT(rootNode) {
  if (!rootNode.left && !rootNode.right) return rootNode.val;
  let max = rootNode.val

  const traverse = rootNode => {
    rootNode.val > max ? max = rootNode.val : rootNode.val
    if (rootNode.left) traverse(rootNode.left)
    if (rootNode.right) traverse(rootNode.right)
    // console.log(max)
  }
  traverse(rootNode)
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) return -1
  const leftHeight = getHeight(rootNode.left)
  const rightHeight = getHeight(rootNode.right)
  return Math.max(leftHeight, rightHeight) + 1
}

function balancedTree(rootNode) {
  let queue = [rootNode]
  while (queue.length) {
    //if (!rootNode) return true
    let currentNode = queue.shift()
    if (Math.abs(getHeight(currentNode.left) - getHeight(currentNode.right)) <= 1) {
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    else return false
  }
  return true
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

/* let bst = new BinarySearchTree()
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)


console.log( balancedTree(bst.root)) */

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
