// task 1
oddEven = function (num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else console.log("Odd");
};
oddEven(5);

// task 2
square = function (num) {
  console.log(num * num);
};
square(5);

// task 3
max = function (num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else console.log(num2);
};
max(5, 10);

// task 4
concatenate = function (str1, str2) {
  console.log(str1 + str2);
};
concatenate("Hello", "World");

// task 5
sum = (num1, num2) => console.log(num1 + num2);
sum(5, 10);

// task 6
contains = (str, char) => console.log(str.includes(char));
contains("Hello", "o");

// task 7
product = (num1, num2 = 5) => console.log(num1 * num2);
product(5);

// task 8
greet = (name, age = 18) =>
  console.log(`Hello ${name}, you are ${age} years old.`);
greet("John");

// task 9
repeat = (func, num) => {
  for (let i = 0; i < num; i++) {
    func("HIGHER ORDER FUNCTION");
  }
};
repeat(greet, 5);

// task 10
apply = function (func1, func2, num) {
  result = func1(num);
  return func2(result);
};
apply(square, oddEven, 5);
