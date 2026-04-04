const form = document.getElementById("expForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  // Get all form data
  const formData = new FormData(event.target);

  // Retrieve specific values by name
  const name = formData.get("itemName");
  const price = formData.get("price");
  console.log(name);
  console.log(price);
});
