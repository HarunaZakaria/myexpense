const form = document.getElementById("expForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh
  // Get all form data
  const formData = new FormData(event.target);
  // Retrieve specific values by name

  const itemName = formData.get("itemName");
  const itemPrice = " Ghc" + formData.get("itemPrice");
  const newExpenses = { name: itemName, price: itemPrice };
  console.log(newExpenses);
  const listContainer = document.querySelector(".list-container");
  const li = document.createElement("li");
  const hr = document.createElement("hr");
  li.textContent = newExpenses.name + newExpenses.price;
  li.classList.add("exp-list");
  hr.classList.add("exp-list-hr");
  listContainer.appendChild(li);
  listContainer.appendChild(hr);
});
