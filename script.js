const list = document.querySelector("#list");

let itemCount = 0;

function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }

  observer.observe(list.lastElementChild);
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    observer.unobserve(entries[0].target);
    addItems(2);
  }
});

// Add 10 items by default
addItems(10);