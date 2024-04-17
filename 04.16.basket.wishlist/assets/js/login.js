const form = document.querySelector("form");
const userNameInp = document.querySelector("#user-name");
const userPassInp = document.querySelector("#user-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('test')
  const localUsers = JSON.parse(localStorage.getItem("users"));
  const check = localUsers.find(
    (x) => x.username == userNameInp.value && x.password == userPassInp.value
  );
  if (check) {
    check.isLogged = true;
    localStorage.setItem('users',JSON.stringify(localUsers));
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Signed In Successfully!",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.replace('index.html');
      });
  }
  else{
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "username or password is incorrect!",
        showConfirmButton: false,
        timer: 1500
      })
  }
});
