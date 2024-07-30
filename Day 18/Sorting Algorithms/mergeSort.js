// -------------------- Merge Sort --------------------  (EXTRA)
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// Divides the input array into two parts
// Recursively sort each half, and then merge them back

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Loop through both arrays
  // Compare elements and add smaller one to result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // next in left
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // next in right
    }
  }

  //add remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(mergeSort(arr));

// another way to write merge
function merge2(left, right) {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}

console.log(merge2([1, 4], [2, 6, 9])); // [1, 2, 4, 6, 9]
