import { BASE_URL } from "./constant.js";

const lists = document.querySelector(".lists");
async function getData(endpoint) {
  //   const response = await fetch(BASE_URL + endpoint);
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  const data = await response.json();
  drawLists(data);
}

console.log(getData("suppliers"));

function drawLists(array) {
  lists.innerHTML = "";
  array.forEach((element) => {
    const listElem = document.createElement("li");
    listElem.textContent = element.companyName;
    lists.append(listElem);
  });
}
