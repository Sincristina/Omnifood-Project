// const icon = document.querySelector(".iconn-mobile-nav");
// const header = document.querySelector(".header");
// icon.addEventListener("click", function () {
//   console.log("Hello");

//   header.classList.add("nav-open");
// });

// const iconClose = document.querySelector(".iconnn-mobile-nav");

// iconClose.addEventListener("click", function () {
//   header.classList.remove("nav-open");
// });

const btns = document.querySelectorAll(".icon-mobile-nav");
const header = document.querySelector(".header");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
}


//CURRENT YEAR OF FOOTER-COPY

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
