/*

Activity 5: Valid Parentheses

Task 5: Solve the "Valid Parentheses" problem on LeetCode.
Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
A string is valid if open brackets are closed in the correct order.
Log the result for a few test cases.

*/

const areBracketsBalanced = (expr) => {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    // push to stack
    if (x == "(" || x == "[" || x == "{") {
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check;

    // pop
    switch (x) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // check if emptied
  return stack.length == 0;
};

let expr1 = "([([()]){})]";
let expr2 = "([[()]{}])";

if (areBracketsBalanced(expr1)) console.log(expr1, ": Balanced ");
else console.log(expr1, ": Not Balanced ");
if (areBracketsBalanced(expr2)) console.log(expr2, ": Balanced ");
else console.log(expr2, ": Not Balanced ");
