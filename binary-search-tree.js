// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
    this.count = 0
  }

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val)
    this.count++
    //if it doesn't have a root, add the newNode there:
    if (!this.root) {
      this.root = newNode
    }
    //else if it does
    else {
      //recursively find where it could be inserted:
      let recurseInsert = currentNode => {
        //is the value less than the value of the node:
        if (val < currentNode.val) {
          //check left to see if something is there:
          //if not, add it:
          if (!currentNode.left) currentNode.left = newNode //this is also the base case for recursion
          //if there's something there, repeat the process with recursion:
          else {
            recurseInsert(currentNode.left)
          }
        }
        //is the value greater than the value of the node:
        else if (val > currentNode.val) {
          //check right to see if something is there:
          //if not, add it:
          if (!currentNode.right) currentNode.right = newNode
          //if there's something there, repeat the process with recursion:
          else {
            recurseInsert(currentNode.right)
          }
        }
      }
      //call the actual function inside insert method:
      recurseInsert(currentNode)
    }
  }

  search(val) {
    let currentNode = this.root
    let bool
    //is the value equal to the root or is the root even there?:
    if (!currentNode) return false
    if (currentNode.val === val) return true
    //else, check to see where it is
    else {
      while (currentNode.left && currentNode.right) {
        //is the value is smaller than currentNode's value
        if (val < currentNode.val) {
          //move to next node:
          currentNode = currentNode.left
          //if it's equal, return true
          if (val === currentNode.val) return true
          //if not, continue loop...
        }

        //is the value is bigger than currentNode's value
        else {
          //move to next node:
          currentNode = currentNode.right
          //if it's equal, return true
          if (val === currentNode.val) return true
          //if not, continue loop...
        }
      }
      return false
    }
  }


  preOrderTraversal(currentNode = this.root) {
    //print, then left, then right
    const traverse = node =>{
      console.log(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    return traverse(currentNode)
  }

  inOrderTraversal(currentNode = this.root) {
    //left, then print, then right
    const traverse = node =>{
      if (node.left) traverse(node.left)
      console.log(node.val)
      if (node.right) traverse(node.right)
    }
    return traverse(currentNode)
  }


  postOrderTraversal(currentNode = this.root) {
    // left, right, then print
    const traverse = node =>{
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      console.log(node.val)
    }
    return traverse(currentNode)
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // uses queue:
    let queue = []
    queue.push(this.root)

    while (queue.length){
      let currentNode = queue.shift()

      console.log(currentNode.val)

      if (currentNode.left){
        queue.push(currentNode.left)
      }
      if (currentNode.right){
        queue.push(currentNode.right)
      }
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // uses stack:

  }
}

module.exports = { BinarySearchTree, TreeNode };
