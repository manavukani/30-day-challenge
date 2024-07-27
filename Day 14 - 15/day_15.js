// task 1

const innerFunction = (input) => {
  console.log("Hi from innerFunction! Input:", input);
};

const outerFunction = (outerVariable) => {
  return innerFunction(outerVariable);
};

outerFunction("QWERTY");

// task 2 - encapsulation
// return object with methods to create
// public interface, keeping count private
const createCounter = () => {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
};

const counter = createCounter();
console.log("--- Counter begins ---");
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// task 3
const generateID = () => {
  let lastId = 0;

  return function generateId() {
    lastId++;
    return `ID_${lastId.toString().padStart(4, "0")}`;
  };
};

const instance1 = generateID();
console.log("--- instance1 ---");
console.log(instance1());
console.log(instance1());
console.log(instance1());

const instance2 = generateID();
console.log("--- instance2 ---");
console.log(instance2());
console.log(instance2());
console.log(instance2());

// task 4
const greet = (name) => {
  const hello = () => {
    console.log(`Hello, ${name}!`);
  };
  return hello;
};

let alice = greet("Alice");
alice();
let bob = greet("Bob");
bob();

// task 5 - closures in loop

const createFunctionArray = function (count) {
  const functionArray = [];

  for (let i = 0; i < count; i++) {
    // IIFE (Immediately Invoked Function Expression)
    functionArray.push(
      (function (index) {
        return function () {
          console.log(`Function ${index} is called.`);
        };
      })(i)
    );
  }

  return functionArray;
};

const functions = createFunctionArray(5);

// all
functions.forEach((func) => func());

// individual
functions[2]();
functions[4]();

// task 6 - module pattern

function collectionManager() {
  let items = [];

  function add(item) {
    items.push(item);
    console.log(`Added: ${item}`);
  }

  function remove(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      items.splice(index, 1);
      console.log(`Removed: ${item}`);
    } else {
      console.log(`Item not found: ${item}`);
    }
  }

  function list() {
    if (items.length === 0) {
      console.log("The collection is empty.");
    } else {
      console.log("Items in the collection:");
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    }
  }

  return {
    addItem: add,
    removeItem: remove,
    listItems: list,
  };
}

const myCollection = collectionManager();

console.log("--- Collection Manager ---");
myCollection.addItem("Book");
myCollection.addItem("Pen");
myCollection.addItem("Notebook");

myCollection.listItems();

myCollection.removeItem("Pen");

myCollection.listItems();

// memoization

console.log("--- Memoization ---");

function memoize(func) {
  const cache = {};

  return (arg) => {
    if (!cache[arg]) {
      console.log("Perform Calculation....");
      const result = func(arg);
      cache[arg] = result;
      return result;
    } else {
      console.log("From Cache...");
      return cache[arg];
    }
  };
}

// task 7
const square = function (x) {
  return x * x;
};

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5)); // cache
console.log(memoizedSquare(10));
console.log(memoizedSquare(10)); // cache

// task 8
console.log("--- Factorial ---");

const factorial = function (x) {
  if (x == 0 || x == 1) return 1;
  
  return x * factorial(x - 1);
};

// console.log(factorial(5));

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(4));
console.log(memoizedFactorial(4)); // cache
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6)); // cache
