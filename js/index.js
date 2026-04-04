// Select buttons from html
const viewBtn = document.querySelector(".view");
const addBtn = document.querySelector(".add");
// Move to add expenses page
viewBtn.addEventListener("click", function (e) {
  window.location.href = "view.html";
});
// Move to view expenses page
addBtn.addEventListener("click", function (e) {
  window.location.href = "add.html";
});

