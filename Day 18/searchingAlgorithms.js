// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

// task 4
const linearSearch = (arr, target) => {
  if (arr.length === 0) return -1;

  if (arr.length === 1) return arr[0] == target ? 0 : -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 5, 6];
const arr2 = [];
const arr3 = [5];

console.log("--- LINEAR SEARCH ---");
console.log("Target: 5, Index:", linearSearch(arr, 5));
console.log("Target: 5, Index:", linearSearch(arr3, 5));
console.log("Target: 4, Index:", linearSearch(arr2, 4));
console.log("Target: 4, Index:", linearSearch(arr3, 4));

// task 5

const binarySearch = (arr, target) => {
  let l = 0;
  let h = arr.length - 1;
  let mid;
  while (l <= h) {
    mid = l + Math.floor((h - l) / 2);

    if (arr[mid] == target) return mid;
    else {
      if (arr[mid] > target) h = mid - 1;
      else l = mid + 1;
    }
  }
  return -1;
};

console.log("--- BINARY SEARCH ---");
const arr4 = [2, 3, 4, 10, 40];
console.log("Target: 10, Index:", binarySearch(arr4, 10));
console.log("Target: 3, Index:", binarySearch(arr4, 3));
console.log("Target: 1, Index:", binarySearch(arr4, 1));

// extra
const recursiveBinarySearch = (arr, target, low, high) => {
  if (low > high) return -1; // not found

  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target)
      return recursiveBinarySearch(arr, target, mid + 1, high); // right half
    else return recursiveBinarySearch(arr, target, low, mid - 1); // left half
  }
  return -1;
};

const binarySearchWrapper = (arr, target) => {
  return recursiveBinarySearch(arr, target, 0, arr.length - 1);
};

console.log("--- RECURSIVE BINARY SEARCH ---");
console.log("Target: 10, Index:", binarySearchWrapper([2, 3, 4, 10, 40], 10));
console.log("Target: 6, Index:", binarySearchWrapper([2, 3, 4, 10, 40], 6));
console.log("Target: 5, Index:", binarySearchWrapper([1, 3, 5, 7, 9], 5));
