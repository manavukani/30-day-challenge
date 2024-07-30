// ------------------------------------------------
// -------------------- TASK 8 --------------------
// ------------------------------------------------
// Write a function to rotate an array by k positions. Log the rotated array.

// ------------------------------------------------
// ----------- APPROACH 1 - BRUTE FORCE -----------
// ------------------------------------------------
// --- Time Complexity = O(K * N), Space = O(1) ---

// Each iterations move pick the first element from the array
// Move it end by shifting all the remaining elements in left direction.

const rightRotation_bruteForce = (arr, k) => {
  const len = arr.length;

  if (len === 0) return arr;

  k = k % len;

  while (k--) {
    let pick = arr[len - 1]; // last
    // Shift all to right
    for (let i = len - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = pick; // Place last element at start
  }

  return arr;
};

console.log(rightRotation_bruteForce([1, 2, 3, 4, 5], 3));

const leftRotation_BruteForce = (arr, k) => {
  const len = arr.length;

  if (len === 0) return arr;

  k = k % len;

  while (k--) {
    let pick = arr[0]; // first
    // Shift all to left
    for (let i = 1; i < len; i++) {
      arr[i - 1] = arr[i];
    }
    arr[len - 1] = pick; // Place first element at end
  }

  return arr;
};

// ------------------------------------------------
// ----- APPROACH 2 - USING A TEMPORARY ARRAY -----
// ------------------------------------------------
// ----- Time Complexity = O(N), Space = O(K) -----

const rotateRight = (arr, k) => {
  const n = arr.length;

  if (n === 0) return;

  k = k % n;

  if (k === 0) return;

  // store the last k elements
  const temp = arr.slice(-k);

  // shift the remaining to right by k
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  // copy from temp to start of original array
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  console.log(arr);
};

rotateRight([1, 2, 3, 4, 5], 3);

// --------------------------------------------------
// ------------- APPROACH 3 - OPTIMAL ---------------
// --------------------------------------------------
// ------ Time Complexity = O(N), SPACE = O(1) ------

// Reverse the entire array = [ 5 , 4 , 3 , 2 , 1]
// Reverse the first k part = [ 3 , 4 , 5 , 2 , 1]
// Reverse the second part = [ 3 , 4 , 5 , 1 , 2]

const rightRotation_optimal = (arr, k) => {
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  const n = arr.length;
  k = k % n;

  // Reverse the entire array
  reverse(arr, 0, n - 1);
  // Reverse the first part
  reverse(arr, 0, k - 1);
  // Reverse the second part
  reverse(arr, k, n - 1);

  console.log(arr);
};

const leftRotation_optimal = (arr, k) => {
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  const n = arr.length;
  k = k % n;

  // Reverse the first part (0 to k - 1)
  reverse(arr, 0, k - 1);
  // Reverse the second part (k to n - 1)
  reverse(arr, k, n - 1);
  // Reverse the entire array
  reverse(arr, 0, n - 1);

  console.log(arr); // Output the rotated array
};

rightRotation_optimal([1, 2, 3, 4, 5], 3);