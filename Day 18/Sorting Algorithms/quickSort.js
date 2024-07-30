// -------------------- Quick Sort --------------------
// Time Complexity: O(n log n)
// Space Complexity: O(log n)

// Select a 'pivot' element from the array
// Partitions other elements into two subarrays
// Repeat recursively for each subarray.

const quickSort = (arr) => {
  function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }

      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
  }

  function qs(arr, low, high) {
    if (low < high) {
      let pIndex = partition(arr, low, high);
      qs(arr, low, pIndex - 1);
      qs(arr, pIndex + 1, high);
    }
  }

  qs(arr, 0, arr.length - 1);
  return arr;
};

let arr = [4, 6, 2, 5, 7, 9, 1, 3];
console.log(quickSort(arr));

// -------------------- Quick Sort with Flag --------------------
function flagQuickSort(arr) {
  function partition(low, high) {
    let pivot = arr[high];
    let i = low - 1;
    let swapMade = false; // Flag to track if a swap is made

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapMade = true;
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    swapMade = true;

    return [i + 1, swapMade];
  }

  function quickSortHelper(low, high) {
    if (low < high) {
      let [pi, swapMade] = partition(low, high);

      if (!swapMade) {
        // If no swap was made, the subarray is already sorted
        return;
      }

      quickSortHelper(low, pi - 1);
      quickSortHelper(pi + 1, high);
    }
  }

  quickSortHelper(0, arr.length - 1);
  return arr;
}

console.log("Quicksort with Flag:", flagQuickSort(arr));

// The partition function performs the partitioning around the pivot
// Sets a swapMade flag to true if any swap is made.
// The quickSortHelper function recursively sorts the subarrays
// If no swap was made during partitioning (swapMade is false) function returns early, assuming the subarray is already sorted.
