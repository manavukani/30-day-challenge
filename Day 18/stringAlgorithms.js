// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

// -------------------- TASK 6 --------------------

class Task_6 {
  countOccurrences = (str) => {
    let charCount = {};
    // count
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    // display
    for (let char in charCount) {
      console.log(`'${char}': ${charCount[char]}`);
    }
  };

  usingMap = (str) => {
    let charCountMap = new Map();
    // count
    for (let char of str) {
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    }
    // display
    for (let [char, count] of charCountMap) {
      console.log(`${char}: ${count}`);
    }
  };
}

console.log("---- COUNT OCCURRENCES ----");
const task6 = new Task_6();
task6.countOccurrences("hello world");

// -------------------- TASK 7 --------------------

// Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

class Task_7 {
  // ------------- Brute FOrce O(N ^ 2)
  // Two loops - 1 for traversing string and 1 for finding substrings
  // check for all substrings one by one
  // check for each and every element, if not found, store in HashSet
  // otherwise break from loop and count it.

  bruteForce = (str) => {
    if (str.length == 0) return 0;

    let maxLength = -1;

    // traversing the string
    for (let i = 0; i < str.length; i++) {
      let set = {};
      // finding substrings
      for (let j = i; i < str.length; j++) {
        // found
        if (set[str[j]]) {
          maxLength = Math.max(maxLength, j - i - 1);
          break;
        }
        // not found
        set[str[j]] = 1;
      }
    }
    return maxLength;
  };

  // ------------- Approach 2 O(2*N)
  // Two pointers left and right.
  // left used for maintaining the starting point of the substring
  // right will maintain the endpoint of the substring
  // right pointer will move forward and check for the duplicate occurrence
  // if found left will be shifted ahead so as to delete the duplicate

  solve_2 = (str) => {
    if (str.length == 0) return 0;

    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charSet = new Set(); // store unique characters of current window

    // iterate whole string
    while (right < str.length) {
      // already in the set, move left pointer, add right to set
      if (charSet.has(str[right])) {
        charSet.delete(str[left]);
        left++;
      }
      // not in set, add
      else {
        charSet.add(str[right]);
        right++;
        // update maxLength
        maxLength = Math.max(maxLength, right - left);
      }
    }

    return maxLength;
  };

  // ------------- Approach 3 O(N)
  // we will make a map that will take care of counting the elements and maintaining the frequency of each and every element as a unity by taking the latest index of every element

  solve_3 = (str) => {
    const mpp = new Array(256).fill(-1);
    // Map to store the latest index of each character

    let left = 0;
    let right = 0;
    const n = str.length;
    let length = 0;

    while (right < n) {
      const charIndex = str.charCodeAt(right);
      if (mpp[charIndex] !== -1) {
        left = Math.max(mpp[charIndex] + 1, left);
      }

      mpp[charIndex] = right;
      length = Math.max(length, right - left + 1);
      right++;
    }

    return length;
  };
}

console.log("---- LONGEST NON REPEATING SUBSTRING ----");

const input = "abcabcbb";
const input2 = "thisisastring";
const task7 = new Task_7();
console.log(task7.bruteForce(input2)); // 7
console.log(task7.solve_2(input)); // 3
console.log(task7.solve_3(input2)); // 7
