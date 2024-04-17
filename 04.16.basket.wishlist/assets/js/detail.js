import products from "./data.js";

const id = new URLSearchParams(window.location.search).get('id');

const product = products.find((x)=>x.id==id);

const title = document.querySelector('.card-title');
const img = document.querySelector('.card-img-top');
const goBackBtn = document.querySelector('.go-back');

title.textContent = product.name;
img.setAttribute('src',product.imgSrc);
img.setAttribute('alt',product.name);
img.setAttribute('title',product.name);

goBackBtn.addEventListener('click',()=>{
    history.back();
    // window.location.replace();
})