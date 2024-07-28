// task 1 - BASICS
const factorial = (x) => {
  if (x == 1 || x == 0) {
    return 1;
  }
  return x * factorial(x - 1);
};

// console.log("--- FACTORIAL ---");
// console.log(factorial(4));

// task 2
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// console.log("--- FIBONACCI ---");
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(5));
// console.log(fibonacci(10));

// task 3 - ARRAY
const sumArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
};

// console.log("--- SUM ---");
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([]));

// TASK 4
const findMax = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const maxRest = findMax(arr.slice(1));
  return Math.max(maxRest, arr[0]);
};

// console.log("--- MAX ---");
// console.log(findMax([1, 2, 3, 4]));
// console.log(findMax([1, 0, -2, -4]));

// task 5 - STRINGS
const reverseString = (str) => {
  if (str.length <= 1) {
    return str;
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }
};

// console.log("--- REVERSE ---");
// console.log(reverseString("hello"));
// console.log(reverseString("world"));

// task 6
const checkPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return checkPalindrome(str.substring(1, str.length - 1));
  }
  return false;
};

// console.log("--- PALINDROME ---");
// console.log(checkPalindrome(""));
// console.log(checkPalindrome("a"));
// console.log(checkPalindrome("aba"));
// console.log(checkPalindrome("abcba"));
// console.log(checkPalindrome("abcbq"));
// console.log(checkPalindrome("abcqa"));

// task 7 - SEARCH

const binarySearch = (arr, target, low, high) => {
  if (low > high) {
    return -1; // not found
  }

  let mid = low + Math.floor((high - low) / 2);
  if (arr[mid] == target) {
    return mid; // index return
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high); // right half
  } else {
    return binarySearch(arr, target, low, mid - 1); // left half
  }
};

const binarySearchWrapper = (arr, target) => {
  return binarySearch(arr, target, 0, arr.length - 1);
};

// console.log("--- BINARY SEARCH ---");
// console.log(binarySearchWrapper([2, 3, 4, 10, 40], 10));
// console.log(binarySearchWrapper([2, 3, 4, 10, 40], 6));
// console.log(binarySearchWrapper([1, 3, 5, 7, 9], 5));

// task 8

const countOccurrence = (arr, target) => {
  if (arr.length === 0) return 0;
  else if (arr[0] === target) return 1 + countOccurrence(arr.slice(1), target);
  else return countOccurrence(arr.slice(1), target);
};

// console.log("--- COUNT OCCURENCE ---");
// console.log(countOccurrence([1, 2, 3, 2, 4, 2, 5], 2));
// console.log(countOccurrence([5, 5, 5, 5], 5));
// console.log(countOccurrence([1, 2, 3, 4], 6));

// task 9 - TREE TRAVERSAL

class TreeNode {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

// IN-ORDER: (left, node, right)
const inOrderTraversal = (node) => {
  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
  } else return;
};

// PRE-ORDER: (node, left, right)
const preOrderTraversal = (node) => {
  if (node !== null) {
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  } else return;
};

// POST-ORDER: (left, right, node)
const postOrderTraversal = (node) => {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
  } else return;
};

//     1
//    / \
//   2   3
//  / \
// 4   5

console.log("--- TREE TRAVERSAL ---");
const node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

console.log("In-order traversal:");
inOrderTraversal(node);

console.log("Pre-order traversal:");
preOrderTraversal(node);

console.log("Post-order traversal:");
postOrderTraversal(node);

// task 10
function calculateDepth(node) {
  if (node !== null) {
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  } else return 0;
}

console.log("--- DEPTH OF TREE ---");
// task 9 tree
console.log("Depth of tree 1:", calculateDepth(node));

//     1
//    /
//   2
//  /
// 3

const node2 = new TreeNode(1);
node2.left = new TreeNode(2);
node2.left.left = new TreeNode(3);

console.log("Depth of tree 2:", calculateDepth(node2));

//   1
//    \
//     2
//      \
//       3

const node3 = new TreeNode(1);
node3.right = new TreeNode(2);
node3.right.right = new TreeNode(3);

console.log("Depth of tree 3:", calculateDepth(node3));

// Empty tree
const node4 = null;

console.log("Depth of tree 4:", calculateDepth(node4));
