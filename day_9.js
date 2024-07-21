// task 1
document.getElementById("day").innerHTML = "day inf";

// task 2
document.getElementsByClassName("para")[0].style.backgroundColor = "red";

// task 3 - append new div
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
newDiv.id = "newDiv";
newDiv.style.fontSize = "50px";
document.body.appendChild(newDiv);

// task 4 - append new list item
const newItem = document.createElement("li");
newItem.textContent = "This is a new item";
document.getElementById("list").appendChild(newItem);

// task 5 - remove element
const elementToRemove = document.getElementById("toBeRemoved");
elementToRemove.parentNode.removeChild(elementToRemove);

// task 6 - remove last child
const lastChild = document.getElementById("list").lastElementChild;
lastChild.parentNode.removeChild(lastChild);

// task 7 - change attribute - src
const bulb = "https://www.w3schools.com/js/pic_bulbon.gif";
document
  .querySelector("img")
  .setAttribute("src", bulb);

// task 8 - add/remove css by class
const element1 = document.querySelector("h2");
const element2 = document.querySelector("#day");
element1.classList.remove("oldClass");
element2.classList.add("newClass");

// task 9 - event listener
document.querySelector('button').addEventListener('click', function() {
    document.getElementById('newDiv').textContent = 'Text has been changed!';
  });

// task 10 - mouseover event listener
document.getElementById('newDiv').addEventListener("mouseover", function() {
    document.getElementById('newDiv').style.border = '10px solid red';
  });
document.getElementById('newDiv').addEventListener("mouseout", function() {
    document.getElementById('newDiv').style.border = '0px';
  });