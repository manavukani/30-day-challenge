// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
function saveToSessionStorage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userData = { name, email };
  sessionStorage.setItem("userData", JSON.stringify(userData));
  displaySavedData();
}

function displaySavedData() {
  const savedDataElement = document.getElementById("savedData");
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData) {
    savedDataElement.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    console.log(savedDataElement.textContent);
  } else {
    savedDataElement.textContent = "No data saved";
  }
}

document
  .getElementById("userForm")
  .addEventListener("submit", saveToSessionStorage);

window.onload = displaySavedData;

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

sessionStorage.setItem("item1", "value1");
sessionStorage.setItem("item2", "value2");

console.log("Before removal:");
console.log("SessionStorage Content:", JSON.stringify(sessionStorage, null, 2));

sessionStorage.removeItem("item1");

console.log("After removal:");
console.log("SessionStorage Content:", JSON.stringify(sessionStorage, null, 2));
