// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display.
function saveToLocalStorage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userData = { name, email };
  localStorage.setItem("userData", JSON.stringify(userData));
  displaySavedData();
}

function displaySavedData() {
  const savedDataElement = document.getElementById("savedData");
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    savedDataElement.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    console.log(`Name: ${userData.name}, Email: ${userData.email}`);
  } else {
    savedDataElement.textContent = "No data saved";
  }
}

document
  .getElementById("userForm")
  .addEventListener("submit", saveToLocalStorage);

window.onload = displaySavedData;

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
localStorage.setItem("item1", "value1");
localStorage.setItem("item2", "value2");

console.log("Before removal:");
console.log("LocalStorage Content:", JSON.stringify(localStorage, null, 2));

localStorage.removeItem("item1");

console.log("After removal:");
console.log("LocalStorage Content:", JSON.stringify(localStorage, null, 2));
