const userForm = document.querySelector("#user-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tBody = document.querySelector("tbody");
let users = [];

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  generateId() {
    return (this.id = Date.now());
  }
}

// let n = new User("aysel", "javadzada@gmail.com", "123");

// console.log(n);

function deleteUser(arr, idx, deleteBtn) {
  arr.splice(idx, 1);
  deleteBtn.closest("tr").remove();
  console.log(arr);
}

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   console.log(event);
  //   console.log(createUser(username.value, email.value, password.value));

  if (username.value && email.value && password.value) {
    let newUser = createUser(username.value, email.value, password.value);
    users.push(newUser);

    resetForm();

    drawTable(users);
  } else {
    window.alert("inputs fields can not be empty!!");
  }
});

function createUser(username, email, password) {
  let user = new User(username, email, password);
  //   resetForm();
  user.generateId();
  return user;
}

// console.log(createUser("a", "a@gmail.com", "asdf"));

function resetForm() {
  //   username.value = "";
  //   email.value = "";
  //   password.value = "";
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((item) => {
    item.value = "";
  });
}

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                <td>${item.id}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td><button class="btn btn-danger delete-btn">DELETE</button></td>
    `;

    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll("td > .delete-btn");

  allDeleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      deleteUser(users, index, this);
    });
  });
}
