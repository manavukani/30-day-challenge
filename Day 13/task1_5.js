const {
  addTwoNumbers,
  objectModule,
  add,
  subtract,
  multiply,
  divide,
} = require("./task1_2_3_utils.js");

// task 1
console.log(addTwoNumbers(5, 7));

// tASK 2
console.log(objectModule.name);
objectModule.greet();

// task 3
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("15 / 3 =", divide(15, 3));

// task 4
const greet = require("./task4_utils.js");
console.log(greet("Alice"));
console.log(greet("Bob"));

const sayHello = require("./task4_utils.js");
console.log(sayHello("Charlie"));

// task 5
const mathUtils = require("./task5_utils.js");

console.log("PI:", mathUtils.PI);
console.log("E:", mathUtils.E);

console.log("Circumference with radius 2:", mathUtils.circumference(2));
console.log("Factorial of 5:", mathUtils.factorial(5));

const { square, cube } = mathUtils;
console.log("Square of 4 using destructured function:", square(4));
console.log("Cube of 2 using destructured function:", cube(2));
