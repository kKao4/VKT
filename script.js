const menuCategory = [
  "kien-truc-cong-trinh",
  "noi-that",
  "quy-hoach",
  "sinh-vien",
  "bao-ton",
  "canh-quan",
  "doi-tac-kinh-doanh",
  "quan-li-nha-nuoc",
];
const doiTacKinhDoanh = {
  category: "doi-tac-kinh-doanh",
  menu: [
    { content: "Đối tác kinh doanh", href: "/" },
    { content: "Đối tác kinh doanh", href: "/" },
    { content: "Đối tác kinh doanh", href: "/" },
    { content: "Đối tác kinh doanh", href: "/" },
    { content: "Đối tác kinh doanh", href: "/" },
    { content: "Đối tác kinh doanh", href: "/" },
  ],
};
const slideResourcesVariants = [
  {
    color: "red",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="95" viewBox="0 0 84 95" fill="none">
  <path
    d="M81 77.8105L70.1492 91.0202L57.5685 91.9637L54.9836 77.8105H25.3591L22.1855 91.9637L13.2218 91.0202L3 77.8105L9.51721 65.5444L41.6855 5L63.3871 45.1914L81 77.8105Z"
    fill="white"
  />
  <path
    d="M3 77.8105L13.2218 91.0202M3 77.8105L9.51721 65.5444M3 77.8105H81M41.6855 5L57.5685 91.9637L70.1492 91.0202M41.6855 5L22.1855 91.9637L13.2218 91.0202M41.6855 5L9.51721 65.5444M41.6855 5L63.3871 45.1914M81 77.8105L70.1492 91.0202M81 77.8105L63.3871 45.1914M70.1492 91.0202L63.3871 45.1914M13.2218 91.0202L9.6243 66.2808M9.51721 65.5444L9.6243 66.2808M9.6243 66.2808L63.3871 45.1914"
    stroke="white"
    stroke-width="4.33333"
  />
  <path
    d="M3 77.8105L13.2218 91.0202M3 77.8105L9.51721 65.5444M3 77.8105H81M41.6855 5L57.5685 91.9637L70.1492 91.0202M41.6855 5L22.1855 91.9637L13.2218 91.0202M41.6855 5L9.51721 65.5444M41.6855 5L63.3871 45.1914M81 77.8105L70.1492 91.0202M81 77.8105L63.3871 45.1914M70.1492 91.0202L63.3871 45.1914M13.2218 91.0202L9.6243 66.2808M9.51721 65.5444L9.6243 66.2808M9.6243 66.2808L63.3871 45.1914"
    stroke="#F04145"
    stroke-width="1.80556"
  />
</svg>`,
  },
  {
    color: "yellow",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="62" height="94" viewBox="0 0 62 94" fill="none">
  <path
    d="M59.1544 2.60645V26.2416H42.5595V26.4092V67.9803H59.1544V91.6154H18.9244H18.7568H3V66.9745H18.7568V26.2416H3L7.52588 2.60645H18.7568H59.1544Z"
    fill="white"
  />
  <path
    d="M42.5595 67.9803H59.1544V91.6154H18.9244M42.5595 67.9803L18.9244 91.6154M42.5595 67.9803V26.4092M18.7568 2.60645H7.52588L3 26.2416H18.7568V66.9745H3V91.6154H18.7568M18.7568 2.60645H59.1544V26.2416H42.5595V26.4092M18.7568 2.60645V91.6154M18.7568 2.60645L42.5595 26.4092M18.7568 91.6154H18.9244"
    stroke="white"
    stroke-width="4.44227"
  />
  <path
    d="M59.1544 2.60645V26.2416H42.5595V26.4092M59.1544 2.60645H18.7568M59.1544 2.60645L18.7568 26.2416M42.5595 67.9803H59.1544V91.6154M42.5595 67.9803L18.9244 91.6154M42.5595 67.9803V26.4092M59.1544 91.6154H18.9244M59.1544 91.6154L18.7568 66.9745M18.7568 66.9745H3V91.6154H18.7568M18.7568 66.9745V26.2416M18.7568 26.2416H3L7.52588 2.60645H18.7568M18.7568 2.60645V91.6154M18.7568 2.60645L42.5595 26.4092M18.7568 91.6154H18.9244"
    stroke="#FF6B00"
    stroke-width="1.85095"
  />
</svg>`,
  },
  {
    color: "lightgreen",
    icon: `  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="101" viewBox="0 0 64 101" fill="none">
  <path
    d="M14.0957 15.2839L39.1449 3.34766L61 34.1129L58.8145 49.0752L46.0377 52.6753L28.3855 57.6491L25.5296 72.6114L20.6522 98.165L3 95.3071L7.42894 63.365L9.52685 48.2346L14.0957 15.2839Z"
    fill="white"
  />
  <path
    d="M14.0957 15.2839L39.1449 3.34766M14.0957 15.2839L46.0377 52.6753M14.0957 15.2839L61 34.1129M14.0957 15.2839L9.52685 48.2346M39.1449 3.34766L61 34.1129M39.1449 3.34766C35.7826 21.385 28.9235 57.4975 28.3855 57.6491M39.1449 3.34766L46.0377 52.6753M61 34.1129L58.8145 49.0752L46.0377 52.6753M28.3855 57.6491L25.5296 72.6114M28.3855 57.6491L7.42894 63.365M28.3855 57.6491L46.0377 52.6753M28.3855 57.6491L9.52685 48.2346M25.5296 72.6114L20.6522 98.165L3 95.3071L7.42894 63.365M25.5296 72.6114C25.6624 71.9156 13.5178 66.1572 7.42894 63.365M7.42894 63.365L9.52685 48.2346"
    stroke="white"
    stroke-width="4.46154"
  />
  <path
    d="M14.0957 15.2839L39.1449 3.34766M14.0957 15.2839L46.0377 52.6753M14.0957 15.2839L61 34.1129M14.0957 15.2839L9.52685 48.2346M39.1449 3.34766L61 34.1129M39.1449 3.34766C35.7826 21.385 28.9235 57.4975 28.3855 57.6491M39.1449 3.34766L46.0377 52.6753M61 34.1129L58.8145 49.0752L46.0377 52.6753M28.3855 57.6491L25.5296 72.6114M28.3855 57.6491L7.42894 63.3651M28.3855 57.6491L46.0377 52.6753M28.3855 57.6491L9.52685 48.2346M25.5296 72.6114L20.6522 98.165L3 95.3071L7.42894 63.3651M25.5296 72.6114C25.6624 71.9156 13.5178 66.1572 7.42894 63.3651M7.42894 63.3651L9.52685 48.2346"
    stroke="#01C1C0"
    stroke-width="1.85897"
  />
</svg>`,
  },
  {
    color: "green",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="87" height="89" viewBox="0 0 87 89" fill="none">
  <path
    d="M82 2.85742L60.3232 31.7599L82 61.8372L40.6549 85.844C27.8117 77.8417 2.30326 61.8372 3.01457 61.8372C3.46382 61.8372 18.6751 53.8769 34.5514 45.4975L32.7638 33.681L29.2443 10.4151L43.471 8.37703L82 2.85742Z"
    fill="white"
  />
  <path
    d="M82 2.85742L60.216 31.9027M82 2.85742L43.471 8.37703M82 2.85742L32.7638 33.681M60.216 31.9027L40.6549 85.844M60.216 31.9027C41.4453 41.8809 3.72588 61.8372 3.01457 61.8372M60.216 31.9027L37.0232 61.8372M40.6549 85.844C27.8117 77.8417 2.30326 61.8372 3.01457 61.8372M40.6549 85.844L82 61.8372M40.6549 85.844L37.0232 61.8372M3.01457 61.8372H82M82 61.8372L43.471 8.37703M43.471 8.37703L29.2443 10.4151L32.7638 33.681M32.7638 33.681L37.0232 61.8372"
    stroke="white"
    stroke-width="4.19469"
  />
  <path
    d="M82 2.85742L60.216 31.9027M82 2.85742L43.471 8.37703M82 2.85742L32.7638 33.681M60.216 31.9027L40.6549 85.844M60.216 31.9027C41.4453 41.8809 3.72588 61.8372 3.01457 61.8372M60.216 31.9027L37.0232 61.8372M40.6549 85.844C27.8117 77.8417 2.30326 61.8372 3.01457 61.8372M40.6549 85.844L82 61.8372M40.6549 85.844L37.0232 61.8372M3.01457 61.8372H82M82 61.8372L43.471 8.37703M43.471 8.37703L29.2443 10.4151L32.7638 33.681M32.7638 33.681L37.0232 61.8372"
    stroke="#0C9675"
    stroke-width="1.74779"
  />
</svg>`,
  },
  {
    color: "blue",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="77" height="94" viewBox="0 0 77 94" fill="none">
  <path
    d="M13.5772 13.8024L36.1316 2.91406L55.575 31.2237L54.7973 43.9786L44.044 47.2763L73.463 79.599L68.0189 89.0874C68.0189 89.0874 40.1224 74.3717 23.1872 65.3129L17.9326 90.6428L3 87.843L9.26634 43.9786L13.5772 13.8024Z"
    fill="white"
  />
  <path
    d="M13.5772 13.8024L36.1316 2.91406M13.5772 13.8024L44.044 47.2763M13.5772 13.8024L9.26634 43.9786M13.5772 13.8024L55.575 31.2237M36.1316 2.91406L55.575 31.2237M36.1316 2.91406L44.044 47.2763M36.1316 2.91406L25.766 52.8815M55.575 31.2237L54.7973 43.9786L44.044 47.2763M44.044 47.2763L73.463 79.599L68.0188 89.0874C68.0188 89.0874 9.79849 58.3755 10.5141 58.3755C11.2298 58.3755 25.766 52.8815 25.766 52.8815M44.044 47.2763L25.766 52.8815M9.26634 43.9786L3 87.843L17.9326 90.6428L25.766 52.8815M9.26634 43.9786L25.766 52.8815"
    stroke="white"
    stroke-width="4.29379"
  />
  <path
    d="M13.5772 13.8024L36.1316 2.91406M13.5772 13.8024L44.044 47.2763M13.5772 13.8024L9.26634 43.9786M13.5772 13.8024L55.575 31.2237M36.1316 2.91406L55.575 31.2237M36.1316 2.91406L44.044 47.2763M36.1316 2.91406L25.766 52.8815M55.575 31.2237L54.7973 43.9786L44.044 47.2763M44.044 47.2763L73.463 79.599L68.0188 89.0874C68.0188 89.0874 8.72505 58.3755 8.13307 58.289C7.54109 58.2025 25.766 52.8815 25.766 52.8815M44.044 47.2763L25.766 52.8815M9.26634 43.9786L3 87.843L17.9326 90.6428L25.766 52.8815M9.26634 43.9786L25.766 52.8815"
    stroke="#0382D8"
    stroke-width="1.78908"
  />
</svg>`,
  },
  {
    color: "brown",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="94" height="85" viewBox="0 0 94 85" fill="none">
  <path
    d="M2.5127 58.1026V2.53125H21.179L36.1405 49.8381H57.9415L74.1854 2.53125H90.9993V58.1026L46.8273 82.4685L2.5127 58.1026Z"
    fill="white"
  />
  <path
    d="M2.5127 58.1026V2.53125H21.179M2.5127 58.1026L46.8273 82.4684M2.5127 58.1026L21.179 35.0191M46.8273 82.4684L90.9993 58.1026M46.8273 82.4684L21.179 49.8381M46.8273 82.4684L74.1854 49.8381M46.8273 82.4684C46.8273 79.5046 39.7027 59.48 36.1405 49.8381M46.8273 82.4684L57.9415 49.8381M90.9993 58.1026V2.53125H74.1854M90.9993 58.1026L74.1854 37.1565M74.1854 2.53125V37.1565M74.1854 2.53125L57.9415 49.8381M74.1854 49.8381V37.1565M74.1854 49.8381H57.9415M21.179 49.8381V35.0191M21.179 49.8381H36.1405M21.179 2.53125V35.0191M21.179 2.53125L36.1405 49.8381M21.179 35.0191L36.1405 49.8381M74.1854 37.1565L57.9415 49.8381M36.1405 49.8381H57.9415"
    stroke="white"
    stroke-width="4.09934"
  />
  <path
    d="M2.5127 58.1026V2.53125H21.179M2.5127 58.1026L46.8273 82.4684M2.5127 58.1026L21.179 35.0191M46.8273 82.4684L90.9993 58.1026M46.8273 82.4684L21.179 49.8381M46.8273 82.4684L74.1854 49.8381M46.8273 82.4684C46.8273 79.5046 39.7027 59.48 36.1405 49.8381M46.8273 82.4684L57.9415 49.8381M90.9993 58.1026V2.53125H74.1854M90.9993 58.1026L74.1854 37.1565M74.1854 2.53125V37.1565M74.1854 2.53125L57.9415 49.8381M74.1854 49.8381V37.1565M74.1854 49.8381H57.9415M21.179 49.8381V35.0191M21.179 49.8381H36.1405M21.179 2.53125V35.0191M21.179 2.53125L36.1405 49.8381M21.179 35.0191L36.1405 49.8381M74.1854 37.1565L57.9415 49.8381M36.1405 49.8381H57.9415"
    stroke="#84775F"
    stroke-width="1.70806"
  />
</svg>`,
  },
  {
    color: "orange",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="85" viewBox="0 0 96 85" fill="none">
  <path
    d="M34.028 2.6543H89L52.6558 30.0015L67.3229 51.534L60.8056 71.6526L10.5091 82.562L3 57.2012L31.1944 46.1502L31.2184 46.0537L15.6096 32.5489L27.3939 13.422L34.028 2.6543Z"
    fill="white"
  />
  <path
    d="M34.028 2.6543H89M34.028 2.6543L27.3939 13.422M34.028 2.6543L39.8764 11.2403M89 2.6543L31.1944 46.1502M89 2.6543L39.8764 11.2403M31.1944 46.1502L3 57.2012M31.1944 46.1502L39.8764 11.2403M3 57.2012L10.5091 82.562L60.8056 71.6526M3 57.2012L67.3229 51.534M60.8056 71.6526L67.3229 51.534M60.8056 71.6526L15.6096 32.5489L27.3939 13.422M67.3229 51.534L39.8764 11.2403M27.3939 13.422L39.8764 11.2403"
    stroke="white"
    stroke-width="4.16129"
  />
  <path
    d="M34.028 2.6543H89M34.028 2.6543L27.3939 13.422M34.028 2.6543L39.8764 11.2403M89 2.6543L31.1944 46.1502M89 2.6543L39.8764 11.2403M31.1944 46.1502L3 57.2012M31.1944 46.1502L39.8764 11.2403M3 57.2012L10.5091 82.562L60.8056 71.6526M3 57.2012L67.3229 51.534M60.8056 71.6526L67.3229 51.534M60.8056 71.6526L15.6096 32.5489L27.3939 13.422M67.3229 51.534L39.8764 11.2403M27.3939 13.422L39.8764 11.2403"
    stroke="#CA653C"
    stroke-width="1.73387"
  />
</svg>`,
  },
  {
    color: "gray",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="79" height="95" viewBox="0 0 79 95" fill="none">
  <path
    d="M66.7628 92.6582H26.2106L3.08312 48.4626L26.2106 2.84131H66.7628L75 20.4245H44.5858V32.7803L44.5858 63.8281V74.9166H75L66.7628 92.6582Z"
    fill="white"
  />
  <path
    d="M26.2106 92.6582H66.7628L75 74.9166H44.5858M26.2106 92.6582L3.08312 48.4626M26.2106 92.6582L44.5858 74.9166M3.08312 48.4626L26.2106 2.84131M3.08312 48.4626L44.5858 20.4245M3.08312 48.4626L44.5858 74.9166M3.08312 48.4626L44.5858 63.8281M3.08312 48.4626L44.5858 32.7803M26.2106 2.84131H66.7628L75 20.4245H44.5858M26.2106 2.84131L44.5858 20.4245M44.5858 20.4245V32.7803M44.5858 74.9166V63.8281M44.5858 63.8281L44.5858 32.7803"
    stroke="white"
    stroke-width="4.58639"
  />
  <path
    d="M26.2106 92.6582H66.7628L75 74.9166H44.5858M26.2106 92.6582L3.08312 48.4626M26.2106 92.6582L44.5858 74.9166M3.08312 48.4626L26.2106 2.84131M3.08312 48.4626L44.5858 20.4245M3.08312 48.4626L44.5858 74.9166M3.08312 48.4626L44.5858 63.8281M3.08312 48.4626L44.5858 32.7803M26.2106 2.84131H66.7628L75 20.4245H44.5858M26.2106 2.84131L44.5858 20.4245M44.5858 20.4245V32.7803M44.5858 74.9166V63.8281M44.5858 63.8281L44.5858 32.7803"
    stroke="#828282"
    stroke-width="1.911"
  />
</svg>`,
  },
];
const dataSlideResources = [
  {
    text: "Kiến trúc công trình",
  },
  {
    text: "Nội thất",
  },
  {
    text: "Quy hoạch",
  },
  {
    text: "Sinh viên",
  },
  {
    text: "Bảo tồn",
  },
  {
    text: "Cảnh quan",
  },
  {
    text: "Quản lí nhà nước",
  },
  {
    text: "Đối tác kinh doanh",
  },
];

function init() {
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

  categoryButton.addEventListener("mouseenter", openCategoryMenu);
  categoryMenu.addEventListener("mouseleave", closeCategoryMenu);
  fieldMenuButton.addEventListener("mouseenter", openFieldMenu);
  fieldMenu.addEventListener("mouseleave", closeFieldMenu);
  categoryMenuOverlay.addEventListener("mouseenter", closeCategoryMenu);
  fieldMenuOverlay.addEventListener("mouseenter", closeFieldMenu);
  searchInput.addEventListener("focus", openSearchDropdown);
  searchInput.addEventListener("blur", closeSearchDropdown);
  searchInput.addEventListener("input", (e) => {
    console.log(e.target.value);
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

  doiTacKinhDoanh.menu.forEach((item) => {
    detailMenuContainer.innerHTML += `
    <a href="${item.href}" class="category-menu-nav-link">
      ${item.content}
      <div class="category-menu-nav-link-deco category-menu-nav-link-deco-1"></div>
      <div class="category-menu-nav-link-deco category-menu-nav-link-deco-2"></div>
    </a>`;
  });
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

  // SECTION: banner
  const slidesPerViewAndGroup = 4;
  const swiperBanner = new Swiper(".swiper-banner", {
    speed: 800,
    slidesPerView: slidesPerViewAndGroup,
    spaceBetween: (window.innerWidth / 100) * 1.17,
    slidesPerGroup: slidesPerViewAndGroup,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  const paginationContainer = document.querySelector(".swiper-banner-pagination-container");

  // render all pagination bars
  swiperBanner.slides.forEach((item, i) => {
    if ((i + 1) % slidesPerViewAndGroup === 0) {
      paginationContainer.innerHTML += `<div class="swiper-banner-pagination-bar pagination-bar-${Math.floor(
        i / slidesPerViewAndGroup
      )}"></div>`;
    }
  });
  const bars = document.querySelectorAll(".swiper-banner-pagination-bar");
  const totalBars = bars.length;
  // set first pagination bar active
  bars[0].style.backgroundColor = "#262626";
  let previousActiveBar = 0;
  let activeBar = 0;
  swiperBanner.on("realIndexChange", (swiper) => {
    activeBar = swiper.realIndex / slidesPerViewAndGroup;
    if (previousActiveBar === totalBars - 1 && activeBar === 0) {
      const bar1 = document.querySelector(`.pagination-bar-${totalBars - 1}`);
      if (bar1) {
        const bar1MarginLeft = parseFloat(window.getComputedStyle(bar1).getPropertyValue("margin-left"));
        const distanceBar = bar1MarginLeft;
        const tl = gsap.timeline({});
        const translateBar1 = parseFloat(paginationContainer.offsetWidth) - parseFloat(bar1.offsetWidth);
        // active bar
        tl.to(bar1, {
          x: `-${translateBar1}px`,
          backgroundColor: "#262626",
          duration: 0.8,
        });
        // normal bars
        bars.forEach((bar, i) => {
          const translateBar = distanceBar + bar.offsetWidth;
          if (i !== totalBars - 1) {
            tl.to(
              bar,
              {
                x: `${translateBar}px`,
                backgroundColor: "#ececec",
              },
              "<"
            );
          }
        });
        // normal bars
        bars.forEach((bar, i) => {
          tl.set(bar, {
            x: 0,
            backgroundColor: i === 0 ? "#262626" : "#ececec",
          });
        });
      }
    } else if (previousActiveBar === 0 && activeBar === totalBars - 1) {
      const bar1 = document.querySelector(`.pagination-bar-0`);
      const translateBar1 = parseFloat(paginationContainer.offsetWidth) - parseFloat(bar1.offsetWidth);
      const distanceBar = parseFloat(window.getComputedStyle(bars[activeBar]).getPropertyValue("margin-left"));
      const tl = gsap.timeline({});
      tl.to(bar1, {
        x: `${translateBar1}px`,
        backgroundColor: "#262626",
        duration: 0.8,
      });
      bars.forEach((bar, i) => {
        if (i !== 0) {
          const translateBar = distanceBar + bar.offsetWidth;
          tl.to(
            bar,
            {
              x: `-${translateBar}px`,
              backgroundColor: "#ececec",
              duration: 0.8,
            },
            "<"
          );
        }
      });
      tl.set(bar1, {
        x: 0,
        backgroundColor: "#ececec",
      });
      bars.forEach((bar, i) => {
        tl.set(bar, { x: 0, backgroundColor: i === totalBars - 1 ? "#262626" : "#ececec" });
      });
    } else if (previousActiveBar < activeBar) {
      const bar1 = document.querySelector(`.pagination-bar-${activeBar - 1}`);
      const bar2 = document.querySelector(`.pagination-bar-${activeBar}`);
      if (bar1 && bar2) {
        const bar1MarginLeft = parseFloat(window.getComputedStyle(bar1).getPropertyValue("margin-left"));
        const bar2MarginLeft = parseFloat(window.getComputedStyle(bar2).getPropertyValue("margin-left"));
        const distanceBar = bar1MarginLeft === 0 ? bar2MarginLeft : bar1MarginLeft;
        const tl = gsap.timeline({});

        if (activeBar - 1 >= 0) {
          const translateBar1 = distanceBar + bar1.offsetWidth;
          const translateBar2 = distanceBar + bar2.offsetWidth;
          // active bar
          tl.to(bar1, {
            x: `${translateBar1}px`,
            backgroundColor: "#262626",
            duration: 0.8,
          });
          // normal bar
          tl.to(
            bar2,
            {
              x: `-${translateBar2}px`,
              duration: 0.8,
            },
            "<"
          );
          // normal bars
          bars.forEach((bar, i) => {
            if (i !== activeBar) {
              tl.set(bar, {
                x: 0,
                backgroundColor: "#ececec",
              });
            }
          });
          // active bar
          tl.set(
            bar2,
            {
              x: 0,
              backgroundColor: "#262626",
            },
            "<"
          );
        }
      }
    } else if (previousActiveBar > activeBar) {
      const bar1 = document.querySelector(`.pagination-bar-${activeBar}`);
      const bar2 = document.querySelector(`.pagination-bar-${activeBar === totalBars - 1 ? 0 : activeBar + 1}`);
      if (bar1 && bar2) {
        const bar1MarginLeft = parseFloat(window.getComputedStyle(bar1).getPropertyValue("margin-left"));
        const bar2MarginLeft = parseFloat(window.getComputedStyle(bar2).getPropertyValue("margin-left"));
        const distanceBar = bar1MarginLeft === 0 ? bar2MarginLeft : bar1MarginLeft;
        const tl = gsap.timeline({});
        if (activeBar !== totalBars - 1) {
          const translateBar1 = distanceBar + bar1.offsetWidth;
          const translateBar2 = distanceBar + bar2.offsetWidth;
          // normal bars
          tl.to(bar1, {
            x: `${translateBar1}px`,
            backgroundColor: "#ececec",
            duration: 0.8,
          });
          // active bar
          tl.to(
            bar2,
            {
              x: `-${translateBar2}px`,
              backgroundColor: "#262626",
              duration: 0.8,
            },
            "<"
          );
          // active bar
          tl.set(bar1, {
            x: 0,
            backgroundColor: "#262626",
          });
          // normal bar
          bars.forEach((bar, i) => {
            if (i !== activeBar) {
              tl.set(
                bar,
                {
                  x: 0,
                  backgroundColor: "#ececec",
                },
                "<"
              );
            }
          });
        }
      }
    }
  });
  swiperBanner.on("beforeTransitionStart", (swiper) => {
    previousActiveBar = swiper.realIndex / 4;
  });

  // SECTION: section 2
  const swiperResources = new Swiper(".swiper-resources", {
    slidesPerView: 8,
    spaceBetween: (window.innerWidth / 100) * 1,
    loop: true,
    navigation: {
      prevEl: ".prev-swiper-resources-btn",
      nextEl: ".next-swiper-resources-btn",
    },
  });
  const slideResources = document.querySelector(".swiper-resources").querySelector(".swiper-wrapper");
  dataSlideResources.forEach((item, i) => {
    slideResources.innerHTML += `<div class="swiper-slide swiper-slide-${slideResourcesVariants[i % variants.length].color}">
    <div class="icon-container">
      ${variants[i % variants.length].icon}
    </div>
    <p class="swiper-slide-title">${item.text}</p>
    <button class="follow-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
        <path
          d="M1.28516 4.99944H4.49944M4.49944 4.99944H7.71373M4.49944 4.99944V8.21373M4.49944 4.99944V1.78516"
          stroke="white"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Theo dõi
    </button>
  </div>`;
  });

  // SECTION: section 3

}

window.addEventListener("DOMContentLoaded", init);
