/*

Activity 1: Two Sum

Task 1: Solve the "Two Sum" problem on LeetCode.
Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
Log the indices for a few test cases.

*/

const solve = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      remaining = sum - arr[i];
      if (arr[j] === remaining) {
        return [i, j];
      }
    }
  }
  return -1;
};

const optimised = function (arr, target) {
  let hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let remaining = target - arr[i];

    if (hashMap.has(remaining)) {
      return [i, hashMap.get(remaining)];
    }
    hashMap.set(arr[i], i);
  }
};

const sol = solve([3, 2, 4, 5, 6], 9);
console.log(sol);

const sol2 = optimised([3, 2, 4, 5, 6], 9);
console.log(sol2);
