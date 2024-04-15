const todoForm = document.querySelector("#todo-form");
const todoInp = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const errorMsg = document.querySelector(".error-message");
const todoList = document.querySelector("#todo-list");
const clearBtn = document.querySelector(".clear-btn");
let todos = [];

//class
class ToDoItem {
  isCompleted;
  static id = 1;
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
    this.id = ToDoItem.id++;
    this.createdAt = new Date();
  }
}

//input keyup
todoInp.addEventListener("keyup", (e) => {
  checkValidation();
});
//form submit
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});
//clear all click
clearBtn.addEventListener("click", () => {
  clear();
});

//functions
function checkValidation() {
  if (todoInp.value.trim().length === 0) {
    errorMsg.classList.replace("d-none", "d-block");
    addBtn.setAttribute("disabled", "disabled");
    addBtn.style.backgroundColor = "red";
    return false;
  } else {
    errorMsg.classList.replace("d-block", "d-none");
    addBtn.removeAttribute("disabled", "disabled");
    addBtn.style.backgroundColor = "#8e48e6";
    return true;
  }
}
function resetForm() {
  todoInp.value = "";
}
function addToDo() {
  if (checkValidation()) {
    const newToDo = new ToDoItem(todoInp.value);
    todos.push(newToDo);
    resetForm();
    renderToDoList(todos);
    Swal.fire({ 
      position: "bottom-end",
      icon: "success",
      title: "Todo Added Successfully!",
      showConfirmButton: false,
      timer: 600,
    });
  } else {
    Swal.fire({
      position: "bottom-end",
      icon: "error",
      title: "Validation Failed!",
      showConfirmButton: false,
      timer: 600,
    });
  }
}
function renderToDoList(arr) {
  todoList.innerHTML = "";
  arr.forEach((todoItem) => {
    todoList.innerHTML += `
        <li class="d-flex justify-content-between align-items-center">
        <span style="text-decoration: ${
          todoItem.isCompleted ? "line-through" : "none"
        }">${todoItem.title}, <i>${moment(todoItem.createdAt).format(
      "MMM Do YYYY, h:mm a"
    )}</i></span>
        <div class="btns">
            <button class="btn btn-outline-primary mark-btn"><i class="fa-solid fa-check"></i></button>
            <button data-id="${
              todoItem.id
            }" class="btn btn-outline-danger delete-btn"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
    </li>
        `;
  });
  //delete buttons
  const deleteBtns = Array.from(document.querySelectorAll(".delete-btn"));
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //yes delete
          const id = this.getAttribute("data-id");
          const todoItem = todos.find((x) => x.id == id);
          deleteToDo(todoItem, todos);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
  //mark buttons
  const markBtns = Array.from(document.querySelectorAll(".mark-btn"));
  markBtns.forEach((markBtn) => {
    markBtn.addEventListener("click", function () {
      const id = this.nextElementSibling.getAttribute("data-id");
      const todoItem = todos.find((x) => x.id == id);
      todoItem.isCompleted = !todoItem.isCompleted;
      renderToDoList(todos);
    });
  });
}
function clear() {
  Swal.fire({
    title: "Are you sure to delete All?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      //yes delete
      todos = [];
      renderToDoList(todos);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}
function deleteToDo(todoItem, todos) {
  const idx = todos.findIndex((x) => x.id == todoItem.id);
  todos.splice(idx, 1);
  renderToDoList(todos);
}
//additions
function search() {}
function sortByName() {}
function fiterByCompleted() {}
function sortByDate() {}
