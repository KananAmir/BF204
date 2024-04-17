const linksUL = document.querySelector(".links");

function renderHeader() {
  const localUsers = JSON.parse(localStorage.getItem("users"));
  const check = localUsers?.find((x) => x.isLogged == true);
  if (check) {
    linksUL.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><b>${check.username}</b></li>
        <li><button class="btn btn-outline-primary logout">Logout</button></li>`;
  } else {
    linksUL.innerHTML = `
        <li><a href="index.html">Home</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="register.html">Register</a></li>
        `;
  }
  const logOutBtn = document.querySelector(".logout");
  if (logOutBtn) {
    logOutBtn.addEventListener("click", () => {
      const currentUser = localUsers.find((x) => x.isLogged);
      currentUser.isLogged = false;
      localStorage.setItem("users", JSON.stringify(localUsers));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged Out Successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("index.html");
      });
    });
  }
}

renderHeader();
