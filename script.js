const openNavMenuButton = document.querySelector(".hamburger-menu");
const closeNavMenuButton = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav-menu");

openNavMenuButton.addEventListener("click", () => {
  openNavMenuButton.classList.toggle("hidden");
  closeNavMenuButton.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
});

closeNavMenuButton.addEventListener("click", () => {
  openNavMenuButton.classList.toggle("hidden");
  closeNavMenuButton.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
})