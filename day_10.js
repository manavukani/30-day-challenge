// task 1 - change text color on button click
document.querySelector("button").addEventListener("click", function () {
  document.getElementById("p1").textContent = "HELLO FROM JAVASCRIPT";
  document.getElementById("p1").style.color = "red";
});

// task 2 - decrease opacity on double click
document.querySelector("img").addEventListener("dblclick", function () {
  let currentOpacity = parseFloat(this.style.opacity);
  let newOpacity = Math.max(0, currentOpacity - 0.2);
  this.style.opacity = newOpacity;
});

// task 3 - change background color on mouseover
document.querySelector("h1").addEventListener("mouseover", function () {
  this.style.backgroundColor = "blue";
});

// task 4 - remove background color on mouseout
document.querySelector("h1").addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

// task 5 - log keydown event
document.querySelector("input").addEventListener("keydown", function (event) {
  console.log(event.key);
});

// task 6 - update keyboard text to h2
document.querySelector("input").addEventListener("keyup", function () {
  const currentValue = this.value;
  document.querySelector("#keyboard").textContent = currentValue;
});

// task 7 - prevent default and log form data
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const dataObject = {};
  formData.forEach((value, key) => {
    dataObject[key] = value;
  });
  console.log(dataObject);
});

// task 8 - change event listener to change text based on dropdown
document.querySelector("#mySelect").addEventListener("change", function () {
  const selectedValue = this.value;
  document.querySelector(
    "#selectedValue"
  ).textContent = `Selected value: ${selectedValue}`;
});

// task 9 - log list item text on click
document.querySelector("#myList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});

// task 10 -  event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener('DOMContentLoaded', function() {
    const parent = document.getElementById('parent');
    const addButton = document.getElementById('add-child');

    parent.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('child')) {
            alert('Child element clicked: ' + event.target.textContent);
        }
    });

    addButton.addEventListener('click', function() {
        const newChild = document.createElement('div');
        newChild.textContent = 'New Child ' + (parent.children.length + 1);
        newChild.className = 'child';
        parent.appendChild(newChild);
    });
});

