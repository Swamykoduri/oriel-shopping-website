// Script for navigation bar
const bar = document.querySelector(".bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector(".xmark");

bar.addEventListener('click', () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// Script for Product Details 
const mainImg = document.getElementsByClassName("mainImg")[0]; // Add [0] to access the first element
const smallImg = document.getElementsByClassName("small-image");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
  mainImg.src = smallImg[i].src;
  });
}

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
  mainImg.src = smallImg[i].src;
  });
}
