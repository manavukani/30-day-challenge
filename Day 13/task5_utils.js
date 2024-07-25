const PI = 3.14159;
const E = 2.71828;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function circumference(radius) {
  return 2 * PI * radius;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

module.exports = {
  PI,
  E,
  square,
  cube,
  circumference,
  factorial,
};
