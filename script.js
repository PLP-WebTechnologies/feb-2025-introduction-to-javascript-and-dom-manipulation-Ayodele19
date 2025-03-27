// Change text content dynamically
function changeText() {
    document.getElementById("info-text").textContent = "Text has been changed!";
}

// Modify CSS styles via JavaScript
function changeColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "tomato" : "lightblue";
}

// Add an element when a button is clicked
function addItem() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("item-list").appendChild(newItem);
}

// Remove an element when a button is clicked
function removeItem() {
    let list = document.getElementById("item-list");
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
}
