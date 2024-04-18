const url = new URLSearchParams(window.location.search);
const wrapper = document.querySelector(".wrapper");
import { BASE_URL } from "./constant.js";
const id = url.get("id");

// console.log(id);

async function getData(endpoint, id) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    const data = await response.json();

    drawCard(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

getData("suppliers", id);

function drawCard(data) {
  wrapper.innerHTML = "";
  wrapper.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.companyName}</h5>
    <p class="card-text">${data.contactTitle}</p>
    <p class="card-text">ADDRESS: ${data.address.city}, ${data.address.country}</p>
    <a class="btn btn-primary" href="suppliers.html">Go Back</a>
  </div>
</div>
  `;
}
