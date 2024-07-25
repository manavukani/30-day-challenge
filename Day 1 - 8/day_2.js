// task 1-5

add = function (a, b) {
  console.log(a + b);
};

subtract = function (a, b) {
  console.log(a - b);
};

multiply = (a, b) => console.log(a * b);

divide = (a, b) => console.log(a / b);

remainder = (a, b) => console.log(a % b);

add(1, 2);
subtract(1, 2);
multiply(1, 2);
divide(1, 2);
remainder(1, 2);
console.log("-----------------");

// task 6-7
var a = 1;
console.log(a);
a += 1;
console.log(a);

var b = 1;
console.log(b);
b -= 1;
console.log(b);
console.log("-----------------");

// task 8 - 14
let num1 = 2
let num2 = 3
let num3 = 2
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num3);
console.log(num1 === num3);
console.log("-----------------");

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let num4 = 2
let num5 = 3
let num6 = 4
console.log(num4 > num5 && num4 < num6);
console.log(num4 > num5 && num4 == num6);
console.log(num4 < num5 && num4 == num6);
console.log("-----------------");

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log(num4 > num5 || num4 < num6);
console.log(num4 > num5 || num4 == num6);
console.log(num4 < num5 || num4 == num6);
console.log("-----------------");

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log(!(num4 > num5));
console.log(!(num4 < num6));
console.log(!(num4 == num6));
console.log("-----------------");

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num7 = -2
console.log(num7 > 0 ? "Positive" : "Negative");
console.log("-----------------");