var button = document.querySelector(".enter");
var input = document.querySelector(".userInput");
var ul = document.querySelector(".shoppingList");

function createListElement(e) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function inputLength(e) {
  return input.value.length;
}

// CallBack Functions

function addListAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

document.addEventListener("keypress", addListAfterKeyPress);
