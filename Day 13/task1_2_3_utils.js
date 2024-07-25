// task 1
const addTwoNumbers = (a, b) => {
  return a + b;
};

// task 2
const objectModule = {
  name: "Manav",
  age: 22,
  greet: function () {
    console.log("Hello, I'm", this.name);
  },
};

// task 3
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

module.exports = {
  addTwoNumbers,
  objectModule,
  add,
  subtract,
  multiply,
  divide,
};
