import { getFromLocalStorage, setToLocalStorage } from "./helpers.js";

let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

let allUsers = getFromLocalStorage() || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = allUsers.find(
    (item) =>
      item.userName === allInputs[0].value &&
      item.password === allInputs[1].value
  );
  console.log(user);

  if (user) {
    localStorage.setItem("userId", user.id);
    window.location = "home.html";
  } else {
    window.alert("username or password is not correct!!");
  }
  //   console.log(allInputs[0].value);
  //   console.log(allInputs[1].value);
});
