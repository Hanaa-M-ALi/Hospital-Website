const navItems = document.querySelector("#nav_items"),
  openNavBtn = document.querySelector(".open_nav-btn"),
  closeNavBtn = document.querySelector(".close_nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

closeNavBtn.addEventListener("click", closeNav);

//close nav meun whn menu item is clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav_items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNav();
    });
  });
}

//chage nav color when the window is scrolling
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//========swiper code in js file==========
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //responsive Breakpoint
  breakpoints: {
    //when the window width is=> 600px
    600: {
      slidesPerView: 1,
    },
    //when the window width is=> 1024
    1024: {
      slidesPerView: 2,
    },
  },
});
