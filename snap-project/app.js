const featureLink = document.querySelector(".feature");
const featureContainer = document.querySelector(".features-toggle");
const companyLink = document.querySelector(".company");
const companyContainer = document.querySelector(".company-toggle");
const featureIcon = document.querySelector(".feature-icon");
const companyIcon = document.querySelector(".company-icon");
const icon = "http://127.0.0.1:5500/snap-project/images/icon-arrow-down.svg";
const navBurger = document.querySelector(".burger-btn");
console.log(navBurger)
const navLinks = document.querySelectorAll(".links");
// nav toggle
featureLink.addEventListener("click", () => {
  featureContainer.classList.toggle("show-feature");
  console.log(featureIcon.src);

  if (featureIcon.src === icon) {
    featureIcon.src = "images/icon-arrow-up.svg";
    // console.log("Source Changed to Up Arrow");
  } else {
    featureIcon.src = "images/icon-arrow-down.svg";
    // console.log("Source Changed to Down Arrow");
  }
});

companyLink.addEventListener("click", () => {
  companyContainer.classList.toggle("show-feature");

  console.log(companyIcon.src);
  if (companyIcon.src === icon) {
    companyIcon.src = "images/icon-arrow-up.svg";
  } else {
    companyIcon.src = "images/icon-arrow-down.svg";
  }
});

// nav btn

navBurger.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
  alert("burger clicked");
});
