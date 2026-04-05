// Select buttons from html
const viewBtn = document.querySelector(".view");
const addBtn = document.querySelector(".add");
const signup = document.querySelector(".signup");
// Move to add expenses page
viewBtn.addEventListener("click", (e) => {
  window.location.href = "view.html";
});
// Move to view expenses page
addBtn.addEventListener("click", (e) => {
  window.location.href = "add.html";
});
//Move to Sign up page

signup.addEventListener("click", (e) => {
  window.location.href = "signup.html";
});
//change the year
const year = document.querySelector(".year");
const newYear = new Date().getFullYear();
const p = document.createElement("p");
p.textContent = newYear;
year.appendChild(p);
