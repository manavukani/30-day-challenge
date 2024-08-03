/*

Activity 3: Palindrome Number

Task 3: Solve the "Palindrome Number" problem on LeetCode.
Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
Log the result for a few test cases, including edge cases like negative numbers.

*/

const solve = (x) => {
  if (x.toString() == x.toString().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

const num = 121021;
console.log(solve(num));
