/*

Activity 2: Reverse Integer

Task 2: Solve the "Reverse Integer" problem on LeetCode.
Write a function that takes an integer and returns it with its digits reversed.
Handle edge cases like negative numbers and numbers ending in zero.
Log the reversed integers for a few test cases.

*/

const solve = (x) => {
  let ans = 0;

  let isNegative = false;
  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  while (x !== 0) {
    let last_digit = x % 10;
    x = Math.floor(x / 10);
    // check overflow
    if (
      ans > Math.floor((Math.pow(2, 31) - 1) / 10) ||
      (ans === Math.floor((Math.pow(2, 31) - 1) / 10) && digit > 7)
    )
      return 0;
    ans = ans * 10 + last_digit;
  }

  return isNegative ? -ans : ans;
};

const sol = solve(123456789);
console.log(sol);
