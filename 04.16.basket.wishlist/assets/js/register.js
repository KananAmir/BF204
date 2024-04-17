import { User } from "./class.js";

const registerForm = document.querySelector("form");
const userNameInp = document.querySelector("#user-name");
const userEmailInp = document.querySelector("#user-email");
const userPassInp = document.querySelector("#user-password");
const userConfirmPassInp = document.querySelector("#user-confirm-password");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = new User(
    userNameInp.value,
    userEmailInp.value,
    userPassInp.value
  );
  const localUsers = JSON.parse(localStorage.getItem("users")) || [];

  let bool = localUsers.find(
    (q) => q.username == userNameInp.value || q.email == userEmailInp.value
  );

  console.log(userNameInp.value);
  console.log(userEmailInp.value);
  if (!bool) {
    localUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(localUsers));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signed Up Successfully",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      // window.location.replace("login.html");
    });
  } else {
    alert("username or email has already used");
  }

  resetForm();
});

function resetForm() {
  userNameInp.value = "";
  userEmailInp.value = "";
  userPassInp.value = "";
  userConfirmPassInp.value = "";
}
