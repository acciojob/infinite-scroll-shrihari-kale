const list = document.getElementById("infi-list");

let itemCount = 0;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

list.addEventListener("scroll", function () {
  // small buffer added (important for Cypress)
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2);
  }
});