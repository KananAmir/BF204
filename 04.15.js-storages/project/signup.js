import { getFromLocalStorage, setToLocalStorage } from "./helpers.js";

let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");

// console.log(allInputs[0]);

// let allUsers = JSON.parse(localStorage.getItem("allUsers")) ?? [];
let allUsers = getFromLocalStorage() || [];

class User {
  constructor(username, email, password) {
    this.userName = username;
    this.email = email;
    this.password = password;
    this.id = Date.now();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bool = allUsers.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  console.log(bool);

  if (!bool) {
    // let userObj = {
    //   userName: allInputs[0].value,
    //   email: allInputs[1].value,
    //   password: allInputs[2].value,
    //   id: Date.now(),
    // };

    let userObj = new User(
      allInputs[0].value,
      allInputs[1].value,
      allInputs[2].value
    );

    allUsers.push(userObj);
    //   console.log(allUsers);

    // localStorage.setItem("allUsers", JSON.stringify(allUsers));
    setToLocalStorage(allUsers);
    window.location = "login.html";
  } else {
    window.alert("username or email already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
