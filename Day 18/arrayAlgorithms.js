console.log("------------------------------------------------");
console.log("-------------------- TASK 8 --------------------");
console.log("------------------------------------------------");
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

console.log("----- USING BRUTE FORCE -----");
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

console.log("----- USING A TEMPORARY ARRAY -----");
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

console.log("----- MOST OPTIMAL -----");
rightRotation_optimal([1, 2, 3, 4, 5], 3);

console.log("------------------------------------------------");
console.log("-------------------- TASK 9 --------------------");
console.log("------------------------------------------------");
// Write a function to merge two sorted arrays into one sorted array. Log the merged array.

// ------------------------------------------------
// ----------- APPROACH 1 - BRUTE FORCE -----------
// ------------------------------------------------
// ------ Time Complexity = O(n+m) + O(n+m) -------
// ------ Space Complexity = O(n+m) ---------------

function merge(arr1, arr2, n, m) {
  let result = new Array(n + m);
  let left = 0;
  let right = 0;

  let index = 0;

  while (left < n && right < m) {
    if (arr1[left] <= arr2[right]) {
      result[index] = arr1[left];
      left++, index++;
    } else {
      result[index] = arr2[right];
      right++, index++;
    }
  }

  // add remaining
  while (left < n) {
    result[index++] = arr1[left++];
  }

  while (right < m) {
    result[index++] = arr2[right++];
  }

  // Fill back the elements to arr1[] and arr2[]

  // for (let i = 0; i < n + m; i++) {
  //   if (i < n) arr1[i] = result[i];
  //   else arr2[i - n] = result[i];
  // }

  return result;
}

console.log("------ BRUTE FORCE ------");
let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4,
  m = 3;
console.log(merge(arr1, arr2, n, m));

// ------------------------------------------------
// ------------- APPROACH 2 - IN PLACE ------------
// ------------------------------------------------
// Time Complexity = O(min(n, m)) + O(n*logn) + O(m*logm)
// Space Complexity = O(1)

function merge_inPlace(arr1, arr2, n, m) {
  let left = n - 1; // largest of left
  let right = 0; // smallest of right

  // left goes to 0, right goes to m-1
  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      // swap, move pointers ahead
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--, right++;
    } else {
      break; // array will be sorted
    }
  }

  // sort arr1 and arr2
  arr1.sort((a, b) => a - b); // if negative, a is sorted before b
  arr2.sort((a, b) => a - b); // if positve, vice versa
}

merge_inPlace(arr1, arr2, n, m);
console.log("------ IN PLACE ------");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));

// ------------------------------------------------
// ----------- APPROACH 3 - GAP METHOD ------------
// ------------------------------------------------
// Time Complexity = O ( log ( n + m ) * ( n + m ) )
// Space Complexity = O ( 1 )

function swapIfGreater(arr1, arr2, ind1, ind2) {
  if (arr1[ind1] > arr2[ind2]) {
    [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
  }
}

function merge_gapMethod(arr1, arr2, n, m) {
  let gap = Math.ceil((n + m) / 2);

  // assume arr1, arr2 to be continuous

  while (gap > 0) {
    let left = 0; // left pointer
    let right = left + gap; // right pointer

    // until right pointer reaches end of continuous array
    while (right < n + m) {
      // arr1 and arr2
      if (left < n && right >= n) {
        // swap if arr1[left] > arr2[right-n]
        swapIfGreater(arr1, arr2, left, right - n);
      }
      // arr2 and arr2
      else if (left >= n) {
        // swap if arr2[left-n] > arr2[right-n]
        swapIfGreater(arr2, arr2, left - n, right - n);
      }
      // arr1 and arr1
      else {
        swapIfGreater(arr1, arr1, left, right);
      }
      left++, right++;
    }

    if (gap == 1) break;

    // update gap when any pointer goes out of m+n
    gap = Math.ceil(gap / 2);
  }
}

const arr3 = [1, 4, 8, 10];
const arr4 = [2, 3, 9];

merge_gapMethod(arr3, arr4, n, m);

console.log("------ GAP METHOD ------");
console.log(`arr1[] = ${arr3.join(" ")}`);
console.log(`arr2[] = ${arr4.join(" ")}`);
