function init() {
  const header = document.querySelector("header");
  const categoryMenuContainer = document.querySelector(".category-menu-container");
  const fieldMenuContainer = document.querySelector(".field-menu-container");
  const categoryMenuOverlay = document.querySelector(".category-menu-overlay");
  const fieldMenuOverlay = document.querySelector(".field-menu-overlay");
  const categoryButton = document.querySelector(".category-btn");
  const categoryMenu = document.querySelector(".category-menu");
  const fieldMenu = document.querySelector(".field-menu");
  const fieldMenuListContainer = document.querySelector(".field-menu-list-container");
  const categoryMenuListContainer = document.querySelector(".category-menu-list-container");
  const headerDetailMenuContainer = document.querySelector(".header-detail-menu-container");
  const detailMenuContainer = document
    .querySelector(".header-detail-menu-container")
    .querySelector("[data-menu='doi-tac-kinh-doanh']");
  const fieldMenuButton = document.querySelector(".field-menu-btn");
  const searchDropdownContainer = document.querySelector(".search-dropdown-container");
  const searchInput = document.querySelector(".form-search-bar-input");
  const searchDropdownNoValue = document.querySelector(".search-input-no-value");
  const searchDropdownHasValue = document.querySelector(".search-input-has-value");
  const notificationButton = document.querySelector(".notification-btn");
  const notificationContainer = document.querySelector(".notification-tab-container");
  const notificationTabContainer = document.querySelector(".notification-tab-container");
  const notificationTabOverlay = document.querySelector(".notification-tab-overlay");
  const searchDropdownBox = document.querySelector(".search-dropdown-box");
  const notificationBox = document.querySelector(".notification-box");

  function openCategoryMenu() {
    if (!searchDropdownContainer.classList.contains("search-dropdown-container-open")) {
      fieldMenuContainer.classList.remove("field-menu-container-open");
      categoryMenuContainer.classList.add("category-menu-container-open");
      categoryMenuListContainer.style.maxHeight = categoryMenuListContainer.scrollHeight + "px";
      headerDetailMenuContainer.style.maxHeight = categoryMenuListContainer.scrollHeight + "px";
    }
  }
  function closeCategoryMenu() {
    categoryMenuContainer.classList.remove("category-menu-container-open");
    categoryMenuListContainer.style.maxHeight = null;
    headerDetailMenuContainer.style.maxHeight = null;
  }
  function openFieldMenu() {
    if (!searchDropdownContainer.classList.contains("search-dropdown-container-open")) {
      categoryMenuContainer.classList.remove("category-menu-container-open");
      fieldMenuContainer.classList.add("field-menu-container-open");
      fieldMenuListContainer.style.maxHeight = fieldMenuListContainer.scrollHeight + "px";
    }
  }
  function closeFieldMenu() {
    fieldMenuContainer.classList.remove("field-menu-container-open");
    fieldMenuListContainer.style.maxHeight = null;
  }
  function closeSearchDropdown() {
    searchDropdownContainer.classList.remove("search-dropdown-container-open");
    searchDropdownBox.style.maxHeight = null;
  }
  function openSearchDropdown() {
    categoryMenuContainer.classList.remove("category-menu-container-open");
    fieldMenuContainer.classList.remove("field-menu-container-open");
    searchDropdownContainer.classList.add("search-dropdown-container-open");
    searchDropdownBox.style.maxHeight = searchDropdownBox.scrollHeight + "px";
  }
  function openNotificationTab() {
    notificationContainer.classList.add("notification-tab-container-open");
    notificationBox.style.maxHeight = notificationBox.scrollHeight + "px";
  }
  function closeNotificationTab() {
    notificationContainer.classList.remove("notification-tab-container-open");
    notificationBox.style.maxHeight = null;
  }

  let lastScrollTop = document.documentElement.scrollTop;
  function detectDirection() {
    const scrollTopPosition = document.documentElement.scrollTop;
    if (scrollTopPosition < lastScrollTop) {
      header.style.transform = "none";
      header.style.opacity = 1;
    } else if (scrollTopPosition > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
      header.style.opacity = 0;
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  }
  window.addEventListener("scroll", detectDirection);
  categoryButton.addEventListener("mouseenter", openCategoryMenu);
  categoryMenu.addEventListener("mouseleave", closeCategoryMenu);
  fieldMenuButton.addEventListener("mouseenter", openFieldMenu);
  fieldMenu.addEventListener("mouseleave", closeFieldMenu);
  categoryMenuOverlay.addEventListener("mouseenter", closeCategoryMenu);
  fieldMenuOverlay.addEventListener("mouseenter", closeFieldMenu);
  searchInput.addEventListener("focus", openSearchDropdown);
  searchDropdownBox.addEventListener("mouseleave", closeSearchDropdown);
  searchInput.addEventListener("input", (e) => {
    if (e.target.value) {
      searchDropdownNoValue.style.display = "none";
      searchDropdownHasValue.style.display = "block";
    } else {
      searchDropdownNoValue.style.display = "block";
      searchDropdownHasValue.style.display = "none";
    }
  });
  notificationButton.addEventListener("mouseenter", openNotificationTab);
  notificationTabContainer.addEventListener("mouseleave", closeNotificationTab);
  notificationTabOverlay.addEventListener("mouseenter", closeNotificationTab);

  // doiTacKinhDoanh.menu.forEach((item) => {
  //   detailMenuContainer.innerHTML += `
  //   <a href="${item.href}" class="category-menu-nav-link">
  //     ${item.content}
  //     <div class="category-menu-nav-link-deco category-menu-nav-link-deco-1"></div>
  //     <div class="category-menu-nav-link-deco category-menu-nav-link-deco-2"></div>
  //   </a>`;
  // });
  const menuItems = document.querySelectorAll(".category-menu-list-item");
  const detailMenuItems = document.querySelectorAll(".category-menu-nav-container");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("mouseenter", () => {
      detailMenuItems.forEach((detailMenuItem) => {
        if (menuItem.getAttribute("data-menu") === detailMenuItem.getAttribute("data-menu")) {
          detailMenuItem.style.opacity = 1;
          detailMenuItem.style.pointerEvents = "all";
        } else {
          detailMenuItem.style.opacity = 0;
          detailMenuItem.style.pointerEvents = "none";
        }
      });
    });
  });
  const openModalMenuButton = document.querySelector(".open-modal-menu-btn");
  const closeModalMenuButton = document.querySelector(".close-modal-menu-btn");
  const modalMenu = document.querySelector(".modal-menu");
  const accordionContainers = document.querySelectorAll(".accordion-container");
  const accordionContents = document.querySelectorAll(".accordion-content");
  openModalMenuButton.addEventListener("click", () => {
    modalMenu.classList.add("modal-menu-open");
  });
  closeModalMenuButton.addEventListener("click", () => {
    modalMenu.classList.remove("modal-menu-open");
  });
  accordionContainers.forEach((accordion, i) => {
    accordion.addEventListener("click", () => {
      const icon = accordion.querySelector("svg");
      if (accordionContents[i].style.maxHeight) {
        accordionContents[i].style.maxHeight = null;
        accordionContents[i].style.opacity = 0;
        icon.style.transform = "none";
      } else {
        accordionContents[i].style.maxHeight = accordionContents[i].scrollHeight + "px";
        accordionContents[i].style.opacity = 1;
        icon.style.transform = "rotateX(180deg)";
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", init);
