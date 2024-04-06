// const allTexts = document.getElementsByClassName("text");
// // const allTexts = document.querySelectorAll(".text");
// //
// console.log(allTexts);

const body = document.body;

const cardElem = document.createElement("div");
// cardElem.className = "card";
// cardElem.setAttribute("class", "card");
cardElem.classList.add("card");

const cardTitle = document.createElement("h3");
cardTitle.classList.add("card-title");
cardTitle.textContent = "Lorem ipsum dolor sit.";

const listElem = document.createElement("ul");
listElem.style.backgroundColor = "teal";
const listItem1 = document.createElement("li");
listItem1.textContent = "html";
const listItem2 = document.createElement("li");
listItem2.textContent = "css";
const listItem3 = document.createElement("li");
listItem3.textContent = "js";

listElem.append(listItem1, listItem2, listItem3);
cardElem.append(cardTitle, listElem);
body.append(cardElem);

console.log("test");

const img = document.createElement("img");

img.setAttribute("src", "linkHere");

img.src = "linkHere";

const students = [
  "Aytac",
  "Aysel",
  "Zakir",
  "Aydan",
  "Farid",
  "Ilvin",
  "Ilqar",
];

const wrapper = document.querySelector(".wrapper");




const studentsList = document.createElement("ul");
students.forEach((item) => {
  const liElem = document.createElement("li");
  liElem.textContent = item;

  liElem.addEventListener("click", function () {
    this.remove();
  });
  studentsList.appendChild(liElem);
});

wrapper.appendChild(studentsList);

const btn = document.querySelector(".change-bg");



btn.addEventListener("click", function () {
  let red, green, blue;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);

  console.log(`rgb(${red},${green},${blue})`);
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
});
