// Activity 3: Understanding SessionStorage

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
const stringValue = "Hello, Session!";
sessionStorage.setItem("myString", stringValue);

const retrievedString = sessionStorage.getItem("myString");

console.log("Retrieved String from SessionStorage:", retrievedString);

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const myObject = {
  name: "John Doe",
  age: 28,
  city: "San Francisco",
  location: "Session Storage",
};

sessionStorage.setItem("myObject", JSON.stringify(myObject));

const retrievedObject = JSON.parse(sessionStorage.getItem("myObject"));

console.log("Retrieved Object from SessionStorage:", retrievedObject);
