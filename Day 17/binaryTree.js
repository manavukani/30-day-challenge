// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes

// task 7

class TreeNode {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

console.log(root);

// task 8

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  inOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  preOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      result.push(node.data);
      this.inOrderTraversal(node.left, result);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  postOrderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      this.inOrderTraversal(node.right, result);
      result.push(node.data);
    }
    return result;
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(18);

console.log(binaryTree.inOrderTraversal()); // 3, 5, 7, 10, 12, 15, 18
// console.log(binaryTree.preOrderTraversal());
// console.log(binaryTree.postOrderTraversal());