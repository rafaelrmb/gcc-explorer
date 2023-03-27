const openNavMenuButton = document.querySelector(".nav-menu__open");
const closeNavMenuButton = document.querySelector(".nav-menu__close");
const navMenu = document.querySelector(".nav-menu");

openNavMenuButton.addEventListener("click", () => {
  navMenu.classList.add("active");
  closeNavMenuButton.classList.add("active");
  openNavMenuButton.classList.remove("active");
});

closeNavMenuButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
  closeNavMenuButton.classList.remove("active");
  openNavMenuButton.classList.add("active");
})