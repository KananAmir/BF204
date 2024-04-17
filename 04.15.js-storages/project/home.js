let wellcome = document.querySelector(".user");
let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

let userId = localStorage.getItem("userId");

let user = allUsers.find((item) => item.id == userId);
wellcome.textContent = `Wellcome ${user.userName}`;

if (!localStorage.getItem("userId" && !user)) {
  window.location = "login.html";
}
