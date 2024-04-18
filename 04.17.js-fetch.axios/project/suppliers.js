// CRUD - create, read, update, delete
import { BASE_URL } from "./constant.js";
const tBody = document.querySelector("tbody");
const loading = document.querySelector(".loading");
const loadingOverlay = document.querySelector("#loading-overlay");
const search = document.querySelector("#search");
const sort = document.querySelector(".sort");

let suppliers = null;
let suppliersCopy = null;

async function getData(endpoint) {
  try {
    loadingOverlay.classList.remove("d-none");
    let response = await axios(`${BASE_URL}/${endpoint}`);

    console.log(response.data);
    suppliers = response.data;
    // suppliersCopy = structuredClone(response.data);
    suppliersCopy = [...response.data];
    loadingOverlay.classList.add("d-none");

    drawTable(response.data);
  } catch (error) {
  } finally {
  }
}

getData("suppliers");

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
    <td>${element.id}</td>
    <td>${element.companyName}</td>
    <td>${element.address?.street}</td>
    <td>${element.address?.phone}</td>
    <td>${element.address?.city}, ${element.address?.country}</td>
    <td><a class="btn btn-primary" href="supplier-details.html?id=${element.id}&name=${element.companyName}">Details</a></td>
    <td><a class="btn btn-success" href="suppliers-form.html?id=${element.id}">Edit</a></td>
    <td><button class="btn btn-danger delete-btn" data-id=${element.id}>Delete</button></td>
    `;

    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete-btn");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      deleteSupplier(id, this);
    });
  });
}

async function deleteSupplier(id, btn) {
  try {
    if (confirm("are u sure to delete supplier??")) {
      let response = await axios.delete(`${BASE_URL}/suppliers/${id}`);
      console.log(response);

      if (response.status === 200) {
        btn.closest("tr").remove();
        Toastify({
          text: "Deleted Successfully!!",
          className: "info",
          close: true,
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
        }).showToast();
      }
      //   await getData("suppliers");
    }
  } catch (error) {
    console.log(error);
    Toastify({
      text: "No such Suppliers",
      className: "info",
      close: true,
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, red, yellow)",
      },
    }).showToast();
  }
}

// search.addEventListener("input", async function (event) {
//   let response = await axios(`${BASE_URL}/suppliers`);
//   let filtered = response.data.filter((item) =>
//     item.companyName
//       .toLocaleLowerCase()
//       .includes(event.target.value.toLocaleLowerCase())
//   );
//   drawTable(filtered);
// });

search.addEventListener("input", function (event) {
  let filtered = suppliers.filter((item) =>
    item.companyName
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  // console.log(event.target.value);
  console.log(search.value);
  drawTable(filtered);
});

sort.addEventListener("click", function () {
  let sorted;
  if (this.textContent === "Ascending") {
    sorted = suppliers.sort((a, b) => a.id - b.id);
    this.textContent = "Descending";
  } else if (this.textContent === "Descending") {
    sorted = suppliers.sort((a, b) => b.id - a.id);

    this.textContent = "Default";
  } else {
    sorted = suppliersCopy;
    this.textContent = "Ascending";
  }

  drawTable(sorted);
});
