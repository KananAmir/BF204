// fetch("https://northwind.vercel.app/api/suppliers")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log(this);
// });
button.addEventListener("click", function () {
  console.log(this);
});
