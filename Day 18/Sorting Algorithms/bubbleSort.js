// -------------------- Bubble Sort --------------------
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Take the first and second elements and compare them.
// If the first element is larger than the second then swap.
// Next take the second and third and swap them if they are not in order.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

const arr = [64, 45, 89, 31, 64, 51, 35, 53, 37, 23, -2, -23, 0];
console.log(bubbleSort(arr));

// -------------------- Recursive Bubble Sort --------------------
// (need to pass length, else stack will overflow)
function bubbleSortRecursive(arr, n) {
  if (n == 1 || n == 0) {
    return;
  }

  // One pass of bubble sort
  // After this pass, the largest element is moved to the end.
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // Swap arr[i] and arr[i + 1]
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  // Largest element is fixed, recur for the remaining array
  bubbleSortRecursive(arr, n - 1);
}

bubbleSortRecursive(arr, arr.length);

console.log("Sorted array:", arr);
