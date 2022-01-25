// const menuToggle = document.querySelector(".toggle");
// const showcase = document.querySelector(".showcase");

// menuToggle.addEventListener("click", () => {
//   menuToggle.classList.toggle("active");
//   showcase.classList.toggle("active");
// });

const menuBtn = document.querySelector(".menu-btn");
const navigationn = document.querySelector(".navigation");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  navigationn.classList.toggle("change");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("change");
  });
  slides.forEach((slides) => {
    slides.classList.remove("change");
  });
  btns[manual].classList.add("change");
  slides[manual].classList.add("change");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});
