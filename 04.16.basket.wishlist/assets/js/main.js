import products from "./data.js";

const productsRow = document.querySelector(".products-row");

window.addEventListener("load", () => {
  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
  const localBasket = JSON.parse(localStorage.getItem("basket"));
  renderBasketTableHTML(localBasket);
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  products.forEach((product) => {
    productsRow.innerHTML += `  <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card">
            <img class="card-img-top"
            height="250"
                src="${product.imgSrc}"
                alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <h4><del class="text-secondary ${
                  product.hasDiscount() ? "d-inline" : "d-none"
                }">${
      product.salePrice
    }$</del> ${product.calcDiscountedPrice()}$</h4>
    <button data-id=${product.id} class="btn btn-outline-success detail-btn">
    <a href="detail.html?id=${product.id}"><i class="fa-solid fa-circle-info">
    </i></a>
    </button>
                <button data-id=${
                  product.id
                } class="btn btn-outline-warning basket-btn">
                    <i class="fa-solid fa-basket-shopping"></i>
                </button>
                <button data-id=${
                  product.id
                } class="btn btn-outline-danger delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <button data-id=${
                  product.id
                } class="btn btn-outline-danger fav-btn">
                <i class="${
                  favs.some((q) => q == product.id)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }"></i>
                </button>
            </div>
        </div>
    </div>`;
    //fav Buttons
    const favBtns = document.querySelectorAll(".fav-btn");
    // console.log(favBtns);
    favBtns.forEach((item) => {
      item.addEventListener("click", function () {
        console.log(this.querySelector("i"));
        const id = this.getAttribute("data-id");

        this.querySelector(".fa-heart").className === "fa-regular fa-heart"
          ? (this.querySelector("i").className = "fa-solid fa-heart")
          : (this.querySelector("i").className = "fa-regular fa-heart");

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const favIndex = favorites.findIndex((item) => item == id);

        console.log(favIndex);

        if (favIndex === -1) {
          favorites.push(id);
        } else {
          favorites.splice(favIndex, 1);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to favs",
          showConfirmButton: false,
          timer: 1000,
        });
      });
    });
    //delete Buttons
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.closest(".col-lg-3").remove();
            const currentID = this.getAttribute("data-id");
            const idx = products.findIndex((x) => x.id == currentID);
            products.splice(idx, 1);
            //delete from local
            const localBasket = JSON.parse(localStorage.getItem("basket"));
            const index = localBasket.findIndex((x) => x.id == idx);
            localBasket.splice(index, 1);
            localStorage.setItem("basket", JSON.stringify(localBasket));
            const updatedBasket = JSON.parse(localStorage.getItem("basket"));
            renderBasketTableHTML(updatedBasket);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      });
    });
    //basket Buttons
    const basketBtns = document.querySelectorAll(".basket-btn");
    basketBtns.forEach((basketBtn) => {
      basketBtn.addEventListener("click", function () {
        const localBasket = JSON.parse(localStorage.getItem("basket"));
        const id = this.getAttribute("data-id");
        const duplicateProduct = localBasket.find((x) => x.id === id);
        if (duplicateProduct) {
          duplicateProduct.count++;
        } else {
          localBasket.push({ id: id, count: 1 });
        }
        localStorage.setItem("basket", JSON.stringify(localBasket));
        renderBasketTableHTML(localBasket);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product added to basket",
          showConfirmButton: false,
          timer: 1000,
        });
      });
    });
  });
});

const localUsers = JSON.parse(localStorage.getItem("users"));
const checkLogged = localUsers.every((x) => x.isLogged == false);
if (checkLogged) {
  window.location.replace("login.html");
}

const tBody = document.querySelector("tbody");

function renderBasketTableHTML(localBasketArr) {
  tBody.innerHTML = "";
  localBasketArr.forEach((basketItem) => {
    const product = products.find((x) => x.id == basketItem.id);
    tBody.innerHTML += ` <tr data-id=${product.id}>
    <th scope="row">${basketItem.id}</th>
    <td>
        <img width="80" height="80" src="${product.imgSrc}" alt="${
      product.name
    }">
    </td>
    <td>${product.name}</td>
    <td>${Number(product.calcDiscountedPrice() * basketItem.count).toFixed(
      2
    )}$</td>
    <td><i>${basketItem.count}</i></td>
    <td>
        <button class="btn btn-outline-warning increase-btn">
            <i class="fa-solid fa-plus"></i>
        </button>
    </td>
    <td>
        <button class="btn btn-outline-warning decrease-btn">
            <i class="fa-solid fa-minus"></i>
        </button>
    </td>
    <td>
        <button class="btn btn-outline-danger delete-basket-btn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </td>
</tr>`;

    //increase buttons
    const increaseBtns = document.querySelectorAll(".increase-btn");
    increaseBtns.forEach((increaseBtn) => {
      increaseBtn.addEventListener("click", function () {
        const id = this.closest("tr").getAttribute("data-id");
        const localBasket = JSON.parse(localStorage.getItem("basket"));
        const product = localBasket.find((x) => x.id == id);
        product.count++;
        localStorage.setItem("basket", JSON.stringify(localBasket));
        renderBasketTableHTML(localBasket);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Count Increased",
          showConfirmButton: false,
          timer: 700,
        });
      });
    });
    //decrease
    const decreaseBtns = document.querySelectorAll(".decrease-btn");
    decreaseBtns.forEach((decreaseBtn) => {
      decreaseBtn.addEventListener("click", function () {
        const id = this.closest("tr").getAttribute("data-id");
        const localBasket = JSON.parse(localStorage.getItem("basket"));
        const product = localBasket.find((x) => x.id == id);
        if (product.count > 1) {
          product.count--;
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Count Decreased",
            showConfirmButton: false,
            timer: 700,
          });
          localStorage.setItem("basket", JSON.stringify(localBasket));
          renderBasketTableHTML(localBasket);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Count is One",
            showConfirmButton: false,
            timer: 700,
          });
          this.classList.replace("btn-outline-warning", "btn-outline-danger");
        }
      });
    });
    //delete
    const deleteBtns = document.querySelectorAll(".delete-basket-btn");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const id = this.closest("tr").getAttribute("data-id");
            const localBasket = JSON.parse(localStorage.getItem("basket"));
            const updatedBasket = localBasket.filter((x) => x.id != id);
            localStorage.setItem("basket", JSON.stringify(updatedBasket));
            renderBasketTableHTML(updatedBasket);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      });
    });
  });
}

const clearAllBtn = document.querySelector(".clear-all");

clearAllBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tBody.innerHTML = "";
      localStorage.setItem("basket", JSON.stringify([]));
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});
