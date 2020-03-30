var button = document.querySelector(".enter");
var input = document.querySelector(".userInput");
var ul = document.querySelector(".shoppingList");

function addItem(e) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function inputLength(e) {
  return input.value.length;
}

button.addEventListener("click", function(e) {
  if (inputLength(e)) {
    addItem(e);
  }
});

document.addEventListener("keypress", function(e) {
  if (inputLength(e) > 0 && e.which === 13) {
    addItem(e);
  }
});
