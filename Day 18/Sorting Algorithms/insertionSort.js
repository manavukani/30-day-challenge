// -------------------- Insertion Sort --------------------
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Start with 2nd element, 1st is assumed to be sorted
// PASS 1: Check if 2nd is smaller than the first item, swap if yes
// PASS 2: Move to the third element and compare it with the second element,
// Then the first element and so on...
// Swap as necessary
// PASS 3 ......

const insertionSort = (arr) => {
  const n = arr.length;
  let i, j, key;
  // Start with 2nd element
  for (i = 1; i < n; i++) {
    key = arr[i];
    // Check if 2nd is smaller than the first item
    j = i - 1;
    // Move elements of arr[0..i-1],
    // that are greater than key, to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

const arr = [64, 45, 89, 31, 64, 51, 35, 53, 37, 23, -2, -23, 0];
console.log(insertionSort(arr));

// -------------------- RecursiveInsertion Sort --------------------

function insertionSortRecursive(arr, n) {
  // Base case: If array is of size 1, return
  if (n <= 1) {
    return;
  }

  // Sort first n-1 elements
  insertionSortRecursive(arr, n - 1);

  // Insert last element at its correct position in sorted array
  let last = arr[n - 1];
  let j = n - 2;

  // Move elements of arr[0..n-1], that are greater than last, to one position ahead of their current position
  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = last;
}

insertionSortRecursive(arr, arr.length);

console.log("Sorted array:", arr);
