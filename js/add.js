const form = document.getElementById("expForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  const newExpenses = [];

  // Get all form data
  const formData = new FormData(event.target);

  // Retrieve specific values by name
  const name = formData.get("itemName");
  const price = " Ghc" + formData.get("price");
  newExpenses.push(name + price);
  console.log(newExpenses);
  const listContainer = document.querySelector(".list-container");

  newExpenses.forEach((expense) => {
    const li = document.createElement("li");
    li.textContent = expense;
    listContainer.appendChild(li);
  });
});
