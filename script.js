const list = document.querySelector("#infi-list");

let itemCount = 0;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Scroll event method (Cypress friendly)
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});