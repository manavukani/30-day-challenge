// Activity 1: Understanding LocalStorage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const stringValue = "Hello, World!";
localStorage.setItem("myString", stringValue);

const retrievedString = localStorage.getItem("myString");
console.log("Retrieved String:", retrievedString);

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
  location: "Local Storage"
};
localStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObject = JSON.parse(localStorage.getItem("myObject"));
console.log("Retrieved Object:", retrievedObject);