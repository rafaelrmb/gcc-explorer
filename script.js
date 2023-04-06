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

const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
