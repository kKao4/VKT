function init() {
  const accordions = document.querySelectorAll(".accordion-container");
  accordions.forEach((accordion) => {
    accordion.querySelector(".accordion-trigger-btn").addEventListener("click", () => {
      const accordionDropdown = accordion.querySelector(".accordion-dropdown");
      const accordionIcon = accordion.querySelector(".accordion-icon");
      if (accordionDropdown.style.maxHeight) {
        accordionDropdown.style.maxHeight = null;
        accordionDropdown.style.opacity = 0;
        accordionIcon.style.transform = "none";
      } else {
        accordionDropdown.style.maxHeight = accordionDropdown.scrollHeight + "px";
        accordionDropdown.style.opacity = 1;
        accordionIcon.style.transform = "rotateX(180deg)";
      }
    });
  });
  accordions.forEach((accordion, i) => {
    if (i < 2) {
      const accordionDropdown = accordion.querySelector(".accordion-dropdown");
      const accordionIcon = accordion.querySelector(".accordion-icon");
      accordionDropdown.style.maxHeight = accordionDropdown.scrollHeight + "px";
      accordionDropdown.style.opacity = 1;
      accordionIcon.style.transform = "rotateX(180deg)";
    }
  });
  const sortButton = document.querySelector(".sort-btn");
  const sortDropdown = document.querySelector(".sort-dropdown");
  sortButton.addEventListener("click", () => {
    sortDropdown.classList.toggle("sort-dropdown-open");
  });
  window.addEventListener("click", (e) => {
    if (!sortButton.contains(e.target)) {
      sortDropdown.classList.remove("sort-dropdown-open");
    }
  });
}

window.addEventListener("DOMContentLoaded", init);
