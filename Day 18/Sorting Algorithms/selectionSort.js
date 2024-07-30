// -------------------- Selection Sort --------------------
// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Iterate and find the smallest element from the unsorted portion
// Swap it & move to the sorted portion of the list.

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      // Swap new minimum element, if index are different
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  };
  console.log(selectionSort(arr));