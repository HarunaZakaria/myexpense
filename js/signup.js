const signupForm = document.querySelector(".signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const newUser = {
    name: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  localStorage.setItem("newUser", JSON.stringify(newUser));
  const svedUser = JSON.parse(localStorage.getItem("newUser"));
  console.log(svedUser.name);
});
