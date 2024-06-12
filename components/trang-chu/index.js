function init() {
  gsap.registerPlugin(ScrollToPlugin);

  // SECTION: section 2
  const swiperResources = new Swiper(".swiper-resources", {
    slidesPerView: 8,
    spaceBetween: (window.innerWidth / 100) * 1,
    loop: true,
    speed: 600,
    navigation: {
      prevEl: ".swiper-resources-prev-btn",
      nextEl: ".swiper-resources-next-btn",
    },
  });
  // const slideResources = document.querySelector(".swiper-resources").querySelector(".swiper-wrapper");
  //   dataSlideResources.forEach((item, i) => {
  //     slideResources.innerHTML += `<div class="swiper-slide swiper-slide-${variants[i % 8].color} ${
  //       item.follow ? "swiper-slide-follow" : ""
  //     }">
  //     <div class="icon-container">
  //       ${variants[i % 8].icon}
  //     </div>
  //     <p class="swiper-slide-title">${item.text}</p>
  //     <button class="follow-btn">
  //       ${
  //         item.follow
  //           ? `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" viewBox="0 0 9 8" fill="none">
  //   <path d="M3.35436 7.09152C3.17605 7.09152 3.05717 7.03209 2.9383 6.91321L0.441981 4.41689C0.204236 4.17915 0.204236 3.82253 0.441981 3.58479C0.679725 3.34704 1.03634 3.34704 1.27409 3.58479L3.35436 5.66505L7.99038 1.08846C8.22813 0.85072 8.58474 0.85072 8.82249 1.08846C9.06023 1.32621 9.06023 1.68283 8.82249 1.92057L3.77041 6.97265C3.71097 7.03209 3.53266 7.09152 3.35436 7.09152Z" fill="white"/>
  // </svg>`
  //           : `<svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
  //         <path
  //           d="M1.28516 4.99944H4.49944M4.49944 4.99944H7.71373M4.49944 4.99944V8.21373M4.49944 4.99944V1.78516"
  //           stroke="white"
  //           stroke-width="1.3"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </svg>`
  //       }
  //       ${item.follow ? "Đang theo dõi" : "Theo dõi"}
  //       <div class="swiper-slide-btn-deco"></div>
  //     </button>
  //   </div>`;
  //   });

  // SECTION: section 3
  // const majorContainer = document.querySelector(".major-container");
  // const renderMajor = () => {
  //   dataMajor.forEach((major, i) => {
  //     majorContainer.innerHTML += `<button class="major-item animate-fadeIn animate-slower major-item-${
  //       variants[i % 8].color
  //     } ${major.follow ? "major-item-followed" : ""} ${major.update ? "major-item-updating" : ""}">
  //       ${
  //         major.update
  //           ? `<img src="./assets/svg/trang-chu/update.svg" alt="" class="major-item-update-icon" />`
  //           : `<div class="major-item-follow">
  //       <div class="major-item-follow-content">
  //       ${
  //         major.follow
  //           ? `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
  //       <path
  //         d="M4.13631 8.25895C3.91954 8.25895 3.77502 8.18669 3.63051 8.04218L0.59568 5.00735C0.306648 4.71832 0.306648 4.28477 0.59568 3.99574C0.884711 3.70671 1.31826 3.70671 1.60729 3.99574L4.13631 6.52476L9.77242 0.960914C10.0615 0.671883 10.495 0.671883 10.784 0.960914C11.0731 1.24995 11.0731 1.68349 10.784 1.97252L4.64212 8.11443C4.56986 8.18669 4.35308 8.25895 4.13631 8.25895Z"
  //         fill="#F04145"
  //       />
  //     </svg>`
  //           : `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  //       <path
  //         d="M1.85547 6.4993H6.49833M6.49833 6.4993H11.1412M6.49833 6.4993V11.1422M6.49833 6.4993V1.85645"
  //         stroke="#CA653C"
  //         stroke-width="1.3"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       />
  //     </svg>`
  //       }
  //       <p>${major.follow ? "Đang theo dõi" : "Theo dõi"}</p>
  //       </div>
  //       </div>`
  //       }
  //       <div class="major-item-icon">
  //       ${variants[i % 8].icon}
  //       </div>
  //       <p class="major-item-title">${major.update ? `ĐANG CẬP NHẬT` : major.text}</p>
  //     </button>`;
  //   });
  // };
  // renderMajor();
  // const showMoreButton = document.querySelector(".what-you-care-container").querySelector(".show-more-btn");
  // showMoreButton.addEventListener("click", () => {
  //   dataMajor = [...dataMajor, ...dataMajor.slice(0, 32)];
  //   majorContainer.innerHTML = "";
  //   renderMajor();
  // });

  // SECTION: section 5
  const buttons1 = document.querySelector(".section-collections").querySelectorAll(".btn-1");
  buttons1.forEach((btn1) => {
    btn1.addEventListener("click", () => {
      buttons1.forEach((btn) => btn.classList.remove("btn-1-active"));
      btn1.classList.toggle("btn-1-active");
      const btn1Crane = document.querySelector(".btn-1-crane");
      const btn1Building = document.querySelector(".btn-1-building");
      const isBtn1CraneActive = btn1Crane.classList.contains("btn-1-active");
      const isBtn1BuildingActive = btn1Building.classList.contains("btn-1-active");
      const btn1CraneIconContainer = btn1Crane.querySelector(".btn-1-icon-container");
      const btn1BuildingIconContainer = btn1Building.querySelector(".btn-1-icon-container");
      if (isBtn1CraneActive) {
        btn1CraneIconContainer.innerHTML = `<svg class="btn-1-icon btn-1-icon-crane" xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
          <path d="M18.9777 26.0078H26.8479L27.5833 27.4676H18.2207L18.9777 26.0078Z" fill="#D5E5E0"/>
          <path d="M28.3574 9.67776V7.46329H27.8337L26.0057 3.06257V2H19.736V2.90741L6.97846 7.46329H2.35742V9.67776H6.72147V13.8857C6.19778 14.0221 5.81471 14.4781 5.81471 15.0282C5.81471 15.5783 6.20263 16.0344 6.72147 16.1707V17.3132H7.03665C7.28879 17.3132 7.4973 17.5107 7.4973 17.7552C7.4973 17.9996 7.28879 18.1971 7.03665 18.1971C6.7845 18.1971 6.58085 17.9949 6.58085 17.7552H5.95048C5.95048 18.1266 6.14929 18.451 6.44992 18.6391L4.87887 20.1624H3.83635V24.6995H10.2321V20.1624H9.18957L7.61852 18.6438C7.91915 18.4557 8.12281 18.1313 8.12281 17.7599C8.12281 17.285 7.79308 16.8807 7.34698 16.749V16.1707C7.87066 16.0344 8.25858 15.5783 8.25858 15.0282C8.25858 14.4781 7.87066 14.0221 7.34698 13.8857V9.67776H19.736V25.4564H18.582L17.4764 28H28.2604L27.1549 25.4564H26.0008V9.67776H28.3526H28.3574ZM9.60173 24.0882H4.46671V20.7736H9.60173V24.0882ZM5.77107 20.1624L7.03665 18.9353L8.30222 20.1624H5.77592H5.77107ZM7.63307 15.0235C7.63307 15.3432 7.36637 15.6018 7.03665 15.6018C6.70692 15.6018 6.44023 15.3432 6.44023 15.0235C6.44023 14.7038 6.70692 14.4452 7.03665 14.4452C7.36637 14.4452 7.63307 14.7038 7.63307 15.0235ZM22.4272 12.0991L20.3712 14.0926V10.1056L22.4272 12.0991ZM20.8173 9.67306H24.9341L22.8781 11.6665L20.8222 9.67306H20.8173ZM22.8733 12.5316L25.2444 14.8307L22.8733 17.1298L20.5021 14.8307L22.8733 12.5316ZM20.3712 15.5689L22.4272 17.5624L20.3712 19.5559V15.5689ZM22.8733 17.9949L25.2444 20.294L22.8733 22.5931L20.5021 20.294L22.8733 17.9949ZM22.4272 23.0257L20.3712 25.0192V21.0322L22.4272 23.0257ZM22.8733 23.4582L24.9292 25.4517H20.8125L22.8684 23.4582H22.8733ZM23.3194 23.0257L25.3753 21.0322V25.0192L23.3194 23.0257ZM25.3753 19.5559L23.3194 17.5624L25.3753 15.5689V19.5559ZM23.3194 12.0991L25.3753 10.1056V14.0926L23.3194 12.0991ZM27.1597 7.45859H26.0105V4.68933L27.1597 7.45859ZM20.3712 3.03906L22.4272 5.03255L20.3712 7.02604V3.04376V3.03906ZM25.3802 7.02604L23.3242 5.03255L25.3802 3.03906V7.02604ZM22.8781 4.6L20.8222 2.60651H24.9389L22.883 4.6H22.8781ZM22.8781 5.4651L24.9341 7.45859H20.8173L22.8733 5.4651H22.8781ZM19.7457 3.55624V7.46329H8.80651L19.736 3.55624H19.7457ZM2.98778 8.0745H27.7271V9.06655H2.98778V8.0745ZM26.7427 26.0676L27.3149 27.3888H18.4268L18.999 26.0676H26.7379H26.7427Z" fill="white"/>
          <rect x="7.35742" y="9.67969" width="12.3867" height="1.53906" fill="#B0CCC2"/>
          <rect x="3.84766" y="20.145" width="6.39551" height="4.55908" fill="#B0CCC2"/>
        </svg>`;
      } else {
        btn1CraneIconContainer.innerHTML = `<svg
                class="btn-1-icon btn-1-icon-crane"
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
              >
                <path d="M18.9777 26.0078H26.8479L27.5833 27.4676H18.2207L18.9777 26.0078Z" fill="#D5E5E0" />
                <path
                  d="M28.3574 9.67776V7.46329H27.8337L26.0057 3.06257V2H19.736V2.90741L6.97846 7.46329H2.35742V9.67776H6.72147V13.8857C6.19778 14.0221 5.81471 14.4781 5.81471 15.0282C5.81471 15.5783 6.20263 16.0344 6.72147 16.1707V17.3132H7.03665C7.28879 17.3132 7.4973 17.5107 7.4973 17.7552C7.4973 17.9996 7.28879 18.1971 7.03665 18.1971C6.7845 18.1971 6.58085 17.9949 6.58085 17.7552H5.95048C5.95048 18.1266 6.14929 18.451 6.44992 18.6391L4.87887 20.1624H3.83635V24.6995H10.2321V20.1624H9.18957L7.61852 18.6438C7.91915 18.4557 8.12281 18.1313 8.12281 17.7599C8.12281 17.285 7.79308 16.8807 7.34698 16.749V16.1707C7.87066 16.0344 8.25858 15.5783 8.25858 15.0282C8.25858 14.4781 7.87066 14.0221 7.34698 13.8857V9.67776H19.736V25.4564H18.582L17.4764 28H28.2604L27.1549 25.4564H26.0008V9.67776H28.3526H28.3574ZM9.60173 24.0882H4.46671V20.7736H9.60173V24.0882ZM5.77107 20.1624L7.03665 18.9353L8.30222 20.1624H5.77592H5.77107ZM7.63307 15.0235C7.63307 15.3432 7.36637 15.6018 7.03665 15.6018C6.70692 15.6018 6.44023 15.3432 6.44023 15.0235C6.44023 14.7038 6.70692 14.4452 7.03665 14.4452C7.36637 14.4452 7.63307 14.7038 7.63307 15.0235ZM22.4272 12.0991L20.3712 14.0926V10.1056L22.4272 12.0991ZM20.8173 9.67306H24.9341L22.8781 11.6665L20.8222 9.67306H20.8173ZM22.8733 12.5316L25.2444 14.8307L22.8733 17.1298L20.5021 14.8307L22.8733 12.5316ZM20.3712 15.5689L22.4272 17.5624L20.3712 19.5559V15.5689ZM22.8733 17.9949L25.2444 20.294L22.8733 22.5931L20.5021 20.294L22.8733 17.9949ZM22.4272 23.0257L20.3712 25.0192V21.0322L22.4272 23.0257ZM22.8733 23.4582L24.9292 25.4517H20.8125L22.8684 23.4582H22.8733ZM23.3194 23.0257L25.3753 21.0322V25.0192L23.3194 23.0257ZM25.3753 19.5559L23.3194 17.5624L25.3753 15.5689V19.5559ZM23.3194 12.0991L25.3753 10.1056V14.0926L23.3194 12.0991ZM27.1597 7.45859H26.0105V4.68933L27.1597 7.45859ZM20.3712 3.03906L22.4272 5.03255L20.3712 7.02604V3.04376V3.03906ZM25.3802 7.02604L23.3242 5.03255L25.3802 3.03906V7.02604ZM22.8781 4.6L20.8222 2.60651H24.9389L22.883 4.6H22.8781ZM22.8781 5.4651L24.9341 7.45859H20.8173L22.8733 5.4651H22.8781ZM19.7457 3.55624V7.46329H8.80651L19.736 3.55624H19.7457ZM2.98778 8.0745H27.7271V9.06655H2.98778V8.0745ZM26.7427 26.0676L27.3149 27.3888H18.4268L18.999 26.0676H26.7379H26.7427Z"
                  fill="#015121"
                />
                <rect x="7.35742" y="9.67969" width="12.3867" height="1.53906" fill="#B0CCC2" />
                <rect x="3.84766" y="20.145" width="6.39551" height="4.55908" fill="#B0CCC2" />
                </svg>`;
      }
      if (isBtn1BuildingActive) {
        btn1BuildingIconContainer.innerHTML = `<svg class="btn-1-icon btn-1-icon-building" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3564_18810)">
<path d="M29.8574 29H26.8574V12.5C26.8574 12.3674 26.8047 12.2402 26.711 12.1464C26.6172 12.0527 26.49 12 26.3574 12H19.3574V0.5C19.3574 0.367392 19.3047 0.240215 19.211 0.146447C19.1172 0.0526784 18.99 0 18.8574 0L5.85742 0C5.72481 0 5.59764 0.0526784 5.50387 0.146447C5.4101 0.240215 5.35742 0.367392 5.35742 0.5V29H0.857422C0.724814 29 0.597637 29.0527 0.503868 29.1464C0.4101 29.2402 0.357422 29.3674 0.357422 29.5C0.357422 29.6326 0.4101 29.7598 0.503868 29.8536C0.597637 29.9473 0.724814 30 0.857422 30H29.8574C29.99 30 30.1172 29.9473 30.211 29.8536C30.3047 29.7598 30.3574 29.6326 30.3574 29.5C30.3574 29.3674 30.3047 29.2402 30.211 29.1464C30.1172 29.0527 29.99 29 29.8574 29ZM10.8574 29H8.85742V24.5C8.85742 24.3674 8.9101 24.2402 9.00387 24.1464C9.09764 24.0527 9.22481 24 9.35742 24H10.3574C10.49 24 10.6172 24.0527 10.711 24.1464C10.8047 24.2402 10.8574 24.3674 10.8574 24.5V29ZM12.8574 12.5V29H11.8574V24.5C11.8574 23.6716 11.1859 23 10.3574 23H9.35742C8.52898 23 7.85742 23.6716 7.85742 24.5V29H6.35742V1H18.3574V12H13.3574C13.2248 12 13.0976 12.0527 13.0039 12.1464C12.9101 12.2402 12.8574 12.3674 12.8574 12.5ZM25.8574 29H13.8574V13H25.8574V29Z" fill="white"/>
<path d="M16.3574 7H13.3574C13.2248 7 13.0976 7.05268 13.0039 7.14645C12.9101 7.24021 12.8574 7.36739 12.8574 7.5V10.5C12.8574 10.6326 12.9101 10.7598 13.0039 10.8536C13.0976 10.9473 13.2248 11 13.3574 11H16.3574C16.49 11 16.6172 10.9473 16.711 10.8536C16.8047 10.7598 16.8574 10.6326 16.8574 10.5V7.5C16.8574 7.36739 16.8047 7.24021 16.711 7.14645C16.6172 7.05268 16.49 7 16.3574 7ZM15.8574 10H13.8574V8H15.8574V10ZM16.3574 2H13.3574C13.2248 2 13.0976 2.05268 13.0039 2.14645C12.9101 2.24021 12.8574 2.36739 12.8574 2.5V5.5C12.8574 5.63261 12.9101 5.75979 13.0039 5.85355C13.0976 5.94732 13.2248 6 13.3574 6H16.3574C16.49 6 16.6172 5.94732 16.711 5.85355C16.8047 5.75979 16.8574 5.63261 16.8574 5.5V2.5C16.8574 2.36739 16.8047 2.24021 16.711 2.14645C16.6172 2.05268 16.49 2 16.3574 2ZM15.8574 5H13.8574V3H15.8574V5ZM11.3574 7H8.35742C8.22481 7 8.09764 7.05268 8.00387 7.14645C7.9101 7.24021 7.85742 7.36739 7.85742 7.5V10.5C7.85742 10.6326 7.9101 10.7598 8.00387 10.8536C8.09764 10.9473 8.22481 11 8.35742 11H11.3574C11.49 11 11.6172 10.9473 11.711 10.8536C11.8047 10.7598 11.8574 10.6326 11.8574 10.5V7.5C11.8574 7.36739 11.8047 7.24021 11.711 7.14645C11.6172 7.05268 11.49 7 11.3574 7ZM10.8574 10H8.85742V8H10.8574V10ZM11.3574 2H8.35742C8.22481 2 8.09764 2.05268 8.00387 2.14645C7.9101 2.24021 7.85742 2.36739 7.85742 2.5V5.5C7.85742 5.63261 7.9101 5.75979 8.00387 5.85355C8.09764 5.94732 8.22481 6 8.35742 6H11.3574C11.49 6 11.6172 5.94732 11.711 5.85355C11.8047 5.75979 11.8574 5.63261 11.8574 5.5V2.5C11.8574 2.36739 11.8047 2.24021 11.711 2.14645C11.6172 2.05268 11.49 2 11.3574 2ZM10.8574 5H8.85742V3H10.8574V5ZM11.3574 12H8.35742C8.22481 12 8.09764 12.0527 8.00387 12.1464C7.9101 12.2402 7.85742 12.3674 7.85742 12.5V15.5C7.85742 15.6326 7.9101 15.7598 8.00387 15.8536C8.09764 15.9473 8.22481 16 8.35742 16H11.3574C11.49 16 11.6172 15.9473 11.711 15.8536C11.8047 15.7598 11.8574 15.6326 11.8574 15.5V12.5C11.8574 12.3674 11.8047 12.2402 11.711 12.1464C11.6172 12.0527 11.49 12 11.3574 12ZM10.8574 15H8.85742V13H10.8574V15ZM11.3574 17H8.35742C8.22481 17 8.09764 17.0527 8.00387 17.1464C7.9101 17.2402 7.85742 17.3674 7.85742 17.5V20.5C7.85742 20.6326 7.9101 20.7598 8.00387 20.8536C8.09764 20.9473 8.22481 21 8.35742 21H11.3574C11.49 21 11.6172 20.9473 11.711 20.8536C11.8047 20.7598 11.8574 20.6326 11.8574 20.5V17.5C11.8574 17.3674 11.8047 17.2402 11.711 17.1464C11.6172 17.0527 11.49 17 11.3574 17ZM10.8574 20H8.85742V18H10.8574V20ZM20.8574 23H23.8574C23.99 23 24.1172 22.9473 24.211 22.8536C24.3047 22.7598 24.3574 22.6326 24.3574 22.5V19.5C24.3574 19.3674 24.3047 19.2402 24.211 19.1464C24.1172 19.0527 23.99 19 23.8574 19H20.8574C20.7248 19 20.5976 19.0527 20.5039 19.1464C20.4101 19.2402 20.3574 19.3674 20.3574 19.5V22.5C20.3574 22.6326 20.4101 22.7598 20.5039 22.8536C20.5976 22.9473 20.7248 23 20.8574 23ZM20.8574 18H23.8574C23.99 18 24.1172 17.9473 24.211 17.8536C24.3047 17.7598 24.3574 17.6326 24.3574 17.5V14.5C24.3574 14.3674 24.3047 14.2402 24.211 14.1464C24.1172 14.0527 23.99 14 23.8574 14H20.8574C20.7248 14 20.5976 14.0527 20.5039 14.1464C20.4101 14.2402 20.3574 14.3674 20.3574 14.5V17.5C20.3574 17.6326 20.4101 17.7598 20.5039 17.8536C20.5976 17.9473 20.7248 18 20.8574 18ZM20.8574 28H23.8574C23.99 28 24.1172 27.9473 24.211 27.8536C24.3047 27.7598 24.3574 27.6326 24.3574 27.5V24.5C24.3574 24.3674 24.3047 24.2402 24.211 24.1464C24.1172 24.0527 23.99 24 23.8574 24H20.8574C20.7248 24 20.5976 24.0527 20.5039 24.1464C20.4101 24.2402 20.3574 24.3674 20.3574 24.5V27.5C20.3574 27.6326 20.4101 27.7598 20.5039 27.8536C20.5976 27.9473 20.7248 28 20.8574 28ZM15.8574 23H18.8574C18.99 23 19.1172 22.9473 19.211 22.8536C19.3047 22.7598 19.3574 22.6326 19.3574 22.5V19.5C19.3574 19.3674 19.3047 19.2402 19.211 19.1464C19.1172 19.0527 18.99 19 18.8574 19H15.8574C15.7248 19 15.5976 19.0527 15.5039 19.1464C15.4101 19.2402 15.3574 19.3674 15.3574 19.5V22.5C15.3574 22.6326 15.4101 22.7598 15.5039 22.8536C15.5976 22.9473 15.7248 23 15.8574 23ZM15.8574 18H18.8574C18.99 18 19.1172 17.9473 19.211 17.8536C19.3047 17.7598 19.3574 17.6326 19.3574 17.5V14.5C19.3574 14.3674 19.3047 14.2402 19.211 14.1464C19.1172 14.0527 18.99 14 18.8574 14H15.8574C15.7248 14 15.5976 14.0527 15.5039 14.1464C15.4101 14.2402 15.3574 14.3674 15.3574 14.5V17.5C15.3574 17.6326 15.4101 17.7598 15.5039 17.8536C15.5976 17.9473 15.7248 18 15.8574 18ZM15.8574 28H18.8574C18.99 28 19.1172 27.9473 19.211 27.8536C19.3047 27.7598 19.3574 27.6326 19.3574 27.5V24.5C19.3574 24.3674 19.3047 24.2402 19.211 24.1464C19.1172 24.0527 18.99 24 18.8574 24H15.8574C15.7248 24 15.5976 24.0527 15.5039 24.1464C15.4101 24.2402 15.3574 24.3674 15.3574 24.5V27.5C15.3574 27.6326 15.4101 27.7598 15.5039 27.8536C15.5976 27.9473 15.7248 28 15.8574 28Z" fill="#B0CCC2"/>
<g clip-path="url(#clip1_3564_18810)">
<path d="M16.3574 7H13.3574C13.2248 7 13.0976 7.05268 13.0039 7.14645C12.9101 7.24021 12.8574 7.36739 12.8574 7.5V10.5C12.8574 10.6326 12.9101 10.7598 13.0039 10.8536C13.0976 10.9473 13.2248 11 13.3574 11H16.3574C16.49 11 16.6172 10.9473 16.711 10.8536C16.8047 10.7598 16.8574 10.6326 16.8574 10.5V7.5C16.8574 7.36739 16.8047 7.24021 16.711 7.14645C16.6172 7.05268 16.49 7 16.3574 7ZM15.8574 10H13.8574V8H15.8574V10ZM16.3574 2H13.3574C13.2248 2 13.0976 2.05268 13.0039 2.14645C12.9101 2.24021 12.8574 2.36739 12.8574 2.5V5.5C12.8574 5.63261 12.9101 5.75979 13.0039 5.85355C13.0976 5.94732 13.2248 6 13.3574 6H16.3574C16.49 6 16.6172 5.94732 16.711 5.85355C16.8047 5.75979 16.8574 5.63261 16.8574 5.5V2.5C16.8574 2.36739 16.8047 2.24021 16.711 2.14645C16.6172 2.05268 16.49 2 16.3574 2ZM15.8574 5H13.8574V3H15.8574V5ZM11.3574 7H8.35742C8.22481 7 8.09764 7.05268 8.00387 7.14645C7.9101 7.24021 7.85742 7.36739 7.85742 7.5V10.5C7.85742 10.6326 7.9101 10.7598 8.00387 10.8536C8.09764 10.9473 8.22481 11 8.35742 11H11.3574C11.49 11 11.6172 10.9473 11.711 10.8536C11.8047 10.7598 11.8574 10.6326 11.8574 10.5V7.5C11.8574 7.36739 11.8047 7.24021 11.711 7.14645C11.6172 7.05268 11.49 7 11.3574 7ZM10.8574 10H8.85742V8H10.8574V10ZM11.3574 2H8.35742C8.22481 2 8.09764 2.05268 8.00387 2.14645C7.9101 2.24021 7.85742 2.36739 7.85742 2.5V5.5C7.85742 5.63261 7.9101 5.75979 8.00387 5.85355C8.09764 5.94732 8.22481 6 8.35742 6H11.3574C11.49 6 11.6172 5.94732 11.711 5.85355C11.8047 5.75979 11.8574 5.63261 11.8574 5.5V2.5C11.8574 2.36739 11.8047 2.24021 11.711 2.14645C11.6172 2.05268 11.49 2 11.3574 2ZM10.8574 5H8.85742V3H10.8574V5ZM11.3574 12H8.35742C8.22481 12 8.09764 12.0527 8.00387 12.1464C7.9101 12.2402 7.85742 12.3674 7.85742 12.5V15.5C7.85742 15.6326 7.9101 15.7598 8.00387 15.8536C8.09764 15.9473 8.22481 16 8.35742 16H11.3574C11.49 16 11.6172 15.9473 11.711 15.8536C11.8047 15.7598 11.8574 15.6326 11.8574 15.5V12.5C11.8574 12.3674 11.8047 12.2402 11.711 12.1464C11.6172 12.0527 11.49 12 11.3574 12ZM10.8574 15H8.85742V13H10.8574V15ZM11.3574 17H8.35742C8.22481 17 8.09764 17.0527 8.00387 17.1464C7.9101 17.2402 7.85742 17.3674 7.85742 17.5V20.5C7.85742 20.6326 7.9101 20.7598 8.00387 20.8536C8.09764 20.9473 8.22481 21 8.35742 21H11.3574C11.49 21 11.6172 20.9473 11.711 20.8536C11.8047 20.7598 11.8574 20.6326 11.8574 20.5V17.5C11.8574 17.3674 11.8047 17.2402 11.711 17.1464C11.6172 17.0527 11.49 17 11.3574 17ZM10.8574 20H8.85742V18H10.8574V20ZM20.8574 23H23.8574C23.99 23 24.1172 22.9473 24.211 22.8536C24.3047 22.7598 24.3574 22.6326 24.3574 22.5V19.5C24.3574 19.3674 24.3047 19.2402 24.211 19.1464C24.1172 19.0527 23.99 19 23.8574 19H20.8574C20.7248 19 20.5976 19.0527 20.5039 19.1464C20.4101 19.2402 20.3574 19.3674 20.3574 19.5V22.5C20.3574 22.6326 20.4101 22.7598 20.5039 22.8536C20.5976 22.9473 20.7248 23 20.8574 23ZM20.8574 18H23.8574C23.99 18 24.1172 17.9473 24.211 17.8536C24.3047 17.7598 24.3574 17.6326 24.3574 17.5V14.5C24.3574 14.3674 24.3047 14.2402 24.211 14.1464C24.1172 14.0527 23.99 14 23.8574 14H20.8574C20.7248 14 20.5976 14.0527 20.5039 14.1464C20.4101 14.2402 20.3574 14.3674 20.3574 14.5V17.5C20.3574 17.6326 20.4101 17.7598 20.5039 17.8536C20.5976 17.9473 20.7248 18 20.8574 18ZM20.8574 28H23.8574C23.99 28 24.1172 27.9473 24.211 27.8536C24.3047 27.7598 24.3574 27.6326 24.3574 27.5V24.5C24.3574 24.3674 24.3047 24.2402 24.211 24.1464C24.1172 24.0527 23.99 24 23.8574 24H20.8574C20.7248 24 20.5976 24.0527 20.5039 24.1464C20.4101 24.2402 20.3574 24.3674 20.3574 24.5V27.5C20.3574 27.6326 20.4101 27.7598 20.5039 27.8536C20.5976 27.9473 20.7248 28 20.8574 28ZM15.8574 23H18.8574C18.99 23 19.1172 22.9473 19.211 22.8536C19.3047 22.7598 19.3574 22.6326 19.3574 22.5V19.5C19.3574 19.3674 19.3047 19.2402 19.211 19.1464C19.1172 19.0527 18.99 19 18.8574 19H15.8574C15.7248 19 15.5976 19.0527 15.5039 19.1464C15.4101 19.2402 15.3574 19.3674 15.3574 19.5V22.5C15.3574 22.6326 15.4101 22.7598 15.5039 22.8536C15.5976 22.9473 15.7248 23 15.8574 23ZM15.8574 18H18.8574C18.99 18 19.1172 17.9473 19.211 17.8536C19.3047 17.7598 19.3574 17.6326 19.3574 17.5V14.5C19.3574 14.3674 19.3047 14.2402 19.211 14.1464C19.1172 14.0527 18.99 14 18.8574 14H15.8574C15.7248 14 15.5976 14.0527 15.5039 14.1464C15.4101 14.2402 15.3574 14.3674 15.3574 14.5V17.5C15.3574 17.6326 15.4101 17.7598 15.5039 17.8536C15.5976 17.9473 15.7248 18 15.8574 18ZM15.8574 28H18.8574C18.99 28 19.1172 27.9473 19.211 27.8536C19.3047 27.7598 19.3574 27.6326 19.3574 27.5V24.5C19.3574 24.3674 19.3047 24.2402 19.211 24.1464C19.1172 24.0527 18.99 24 18.8574 24H15.8574C15.7248 24 15.5976 24.0527 15.5039 24.1464C15.4101 24.2402 15.3574 24.3674 15.3574 24.5V27.5C15.3574 27.6326 15.4101 27.7598 15.5039 27.8536C15.5976 27.9473 15.7248 28 15.8574 28Z" fill="#D5E5E0"/>
</g>
</g>
<defs>
<clipPath id="clip0_3564_18810">
<rect width="30" height="30" fill="white" transform="translate(0.357422)"/>
</clipPath>
<clipPath id="clip1_3564_18810">
<rect width="10" height="16" fill="white" transform="translate(14.3574 12)"/>
</clipPath>
</defs>
</svg>
`;
      } else {
        btn1BuildingIconContainer.innerHTML = `<svg
              class="btn-1-icon btn-1-icon-building"
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5691_85202)">
                <path
                  d="M29.8574 29H26.8574V12.5C26.8574 12.3674 26.8047 12.2402 26.711 12.1464C26.6172 12.0527 26.49 12 26.3574 12H19.3574V0.5C19.3574 0.367392 19.3047 0.240215 19.211 0.146447C19.1172 0.0526784 18.99 0 18.8574 0L5.85742 0C5.72481 0 5.59764 0.0526784 5.50387 0.146447C5.4101 0.240215 5.35742 0.367392 5.35742 0.5V29H0.857422C0.724814 29 0.597637 29.0527 0.503868 29.1464C0.4101 29.2402 0.357422 29.3674 0.357422 29.5C0.357422 29.6326 0.4101 29.7598 0.503868 29.8536C0.597637 29.9473 0.724814 30 0.857422 30H29.8574C29.99 30 30.1172 29.9473 30.211 29.8536C30.3047 29.7598 30.3574 29.6326 30.3574 29.5C30.3574 29.3674 30.3047 29.2402 30.211 29.1464C30.1172 29.0527 29.99 29 29.8574 29ZM10.8574 29H8.85742V24.5C8.85742 24.3674 8.9101 24.2402 9.00387 24.1464C9.09764 24.0527 9.22481 24 9.35742 24H10.3574C10.49 24 10.6172 24.0527 10.711 24.1464C10.8047 24.2402 10.8574 24.3674 10.8574 24.5V29ZM12.8574 12.5V29H11.8574V24.5C11.8574 23.6716 11.1859 23 10.3574 23H9.35742C8.52898 23 7.85742 23.6716 7.85742 24.5V29H6.35742V1H18.3574V12H13.3574C13.2248 12 13.0976 12.0527 13.0039 12.1464C12.9101 12.2402 12.8574 12.3674 12.8574 12.5ZM25.8574 29H13.8574V13H25.8574V29Z"
                  fill="#015121"
                />
                <path
                  d="M16.3574 7H13.3574C13.2248 7 13.0976 7.05268 13.0039 7.14645C12.9101 7.24021 12.8574 7.36739 12.8574 7.5V10.5C12.8574 10.6326 12.9101 10.7598 13.0039 10.8536C13.0976 10.9473 13.2248 11 13.3574 11H16.3574C16.49 11 16.6172 10.9473 16.711 10.8536C16.8047 10.7598 16.8574 10.6326 16.8574 10.5V7.5C16.8574 7.36739 16.8047 7.24021 16.711 7.14645C16.6172 7.05268 16.49 7 16.3574 7ZM15.8574 10H13.8574V8H15.8574V10ZM16.3574 2H13.3574C13.2248 2 13.0976 2.05268 13.0039 2.14645C12.9101 2.24021 12.8574 2.36739 12.8574 2.5V5.5C12.8574 5.63261 12.9101 5.75979 13.0039 5.85355C13.0976 5.94732 13.2248 6 13.3574 6H16.3574C16.49 6 16.6172 5.94732 16.711 5.85355C16.8047 5.75979 16.8574 5.63261 16.8574 5.5V2.5C16.8574 2.36739 16.8047 2.24021 16.711 2.14645C16.6172 2.05268 16.49 2 16.3574 2ZM15.8574 5H13.8574V3H15.8574V5ZM11.3574 7H8.35742C8.22481 7 8.09764 7.05268 8.00387 7.14645C7.9101 7.24021 7.85742 7.36739 7.85742 7.5V10.5C7.85742 10.6326 7.9101 10.7598 8.00387 10.8536C8.09764 10.9473 8.22481 11 8.35742 11H11.3574C11.49 11 11.6172 10.9473 11.711 10.8536C11.8047 10.7598 11.8574 10.6326 11.8574 10.5V7.5C11.8574 7.36739 11.8047 7.24021 11.711 7.14645C11.6172 7.05268 11.49 7 11.3574 7ZM10.8574 10H8.85742V8H10.8574V10ZM11.3574 2H8.35742C8.22481 2 8.09764 2.05268 8.00387 2.14645C7.9101 2.24021 7.85742 2.36739 7.85742 2.5V5.5C7.85742 5.63261 7.9101 5.75979 8.00387 5.85355C8.09764 5.94732 8.22481 6 8.35742 6H11.3574C11.49 6 11.6172 5.94732 11.711 5.85355C11.8047 5.75979 11.8574 5.63261 11.8574 5.5V2.5C11.8574 2.36739 11.8047 2.24021 11.711 2.14645C11.6172 2.05268 11.49 2 11.3574 2ZM10.8574 5H8.85742V3H10.8574V5ZM11.3574 12H8.35742C8.22481 12 8.09764 12.0527 8.00387 12.1464C7.9101 12.2402 7.85742 12.3674 7.85742 12.5V15.5C7.85742 15.6326 7.9101 15.7598 8.00387 15.8536C8.09764 15.9473 8.22481 16 8.35742 16H11.3574C11.49 16 11.6172 15.9473 11.711 15.8536C11.8047 15.7598 11.8574 15.6326 11.8574 15.5V12.5C11.8574 12.3674 11.8047 12.2402 11.711 12.1464C11.6172 12.0527 11.49 12 11.3574 12ZM10.8574 15H8.85742V13H10.8574V15ZM11.3574 17H8.35742C8.22481 17 8.09764 17.0527 8.00387 17.1464C7.9101 17.2402 7.85742 17.3674 7.85742 17.5V20.5C7.85742 20.6326 7.9101 20.7598 8.00387 20.8536C8.09764 20.9473 8.22481 21 8.35742 21H11.3574C11.49 21 11.6172 20.9473 11.711 20.8536C11.8047 20.7598 11.8574 20.6326 11.8574 20.5V17.5C11.8574 17.3674 11.8047 17.2402 11.711 17.1464C11.6172 17.0527 11.49 17 11.3574 17ZM10.8574 20H8.85742V18H10.8574V20ZM20.8574 23H23.8574C23.99 23 24.1172 22.9473 24.211 22.8536C24.3047 22.7598 24.3574 22.6326 24.3574 22.5V19.5C24.3574 19.3674 24.3047 19.2402 24.211 19.1464C24.1172 19.0527 23.99 19 23.8574 19H20.8574C20.7248 19 20.5976 19.0527 20.5039 19.1464C20.4101 19.2402 20.3574 19.3674 20.3574 19.5V22.5C20.3574 22.6326 20.4101 22.7598 20.5039 22.8536C20.5976 22.9473 20.7248 23 20.8574 23ZM20.8574 18H23.8574C23.99 18 24.1172 17.9473 24.211 17.8536C24.3047 17.7598 24.3574 17.6326 24.3574 17.5V14.5C24.3574 14.3674 24.3047 14.2402 24.211 14.1464C24.1172 14.0527 23.99 14 23.8574 14H20.8574C20.7248 14 20.5976 14.0527 20.5039 14.1464C20.4101 14.2402 20.3574 14.3674 20.3574 14.5V17.5C20.3574 17.6326 20.4101 17.7598 20.5039 17.8536C20.5976 17.9473 20.7248 18 20.8574 18ZM20.8574 28H23.8574C23.99 28 24.1172 27.9473 24.211 27.8536C24.3047 27.7598 24.3574 27.6326 24.3574 27.5V24.5C24.3574 24.3674 24.3047 24.2402 24.211 24.1464C24.1172 24.0527 23.99 24 23.8574 24H20.8574C20.7248 24 20.5976 24.0527 20.5039 24.1464C20.4101 24.2402 20.3574 24.3674 20.3574 24.5V27.5C20.3574 27.6326 20.4101 27.7598 20.5039 27.8536C20.5976 27.9473 20.7248 28 20.8574 28ZM15.8574 23H18.8574C18.99 23 19.1172 22.9473 19.211 22.8536C19.3047 22.7598 19.3574 22.6326 19.3574 22.5V19.5C19.3574 19.3674 19.3047 19.2402 19.211 19.1464C19.1172 19.0527 18.99 19 18.8574 19H15.8574C15.7248 19 15.5976 19.0527 15.5039 19.1464C15.4101 19.2402 15.3574 19.3674 15.3574 19.5V22.5C15.3574 22.6326 15.4101 22.7598 15.5039 22.8536C15.5976 22.9473 15.7248 23 15.8574 23ZM15.8574 18H18.8574C18.99 18 19.1172 17.9473 19.211 17.8536C19.3047 17.7598 19.3574 17.6326 19.3574 17.5V14.5C19.3574 14.3674 19.3047 14.2402 19.211 14.1464C19.1172 14.0527 18.99 14 18.8574 14H15.8574C15.7248 14 15.5976 14.0527 15.5039 14.1464C15.4101 14.2402 15.3574 14.3674 15.3574 14.5V17.5C15.3574 17.6326 15.4101 17.7598 15.5039 17.8536C15.5976 17.9473 15.7248 18 15.8574 18ZM15.8574 28H18.8574C18.99 28 19.1172 27.9473 19.211 27.8536C19.3047 27.7598 19.3574 27.6326 19.3574 27.5V24.5C19.3574 24.3674 19.3047 24.2402 19.211 24.1464C19.1172 24.0527 18.99 24 18.8574 24H15.8574C15.7248 24 15.5976 24.0527 15.5039 24.1464C15.4101 24.2402 15.3574 24.3674 15.3574 24.5V27.5C15.3574 27.6326 15.4101 27.7598 15.5039 27.8536C15.5976 27.9473 15.7248 28 15.8574 28Z"
                  fill="#B0CCC2"
                />
                <g clip-path="url(#clip1_5691_85202)">
                  <path
                    d="M16.3574 7H13.3574C13.2248 7 13.0976 7.05268 13.0039 7.14645C12.9101 7.24021 12.8574 7.36739 12.8574 7.5V10.5C12.8574 10.6326 12.9101 10.7598 13.0039 10.8536C13.0976 10.9473 13.2248 11 13.3574 11H16.3574C16.49 11 16.6172 10.9473 16.711 10.8536C16.8047 10.7598 16.8574 10.6326 16.8574 10.5V7.5C16.8574 7.36739 16.8047 7.24021 16.711 7.14645C16.6172 7.05268 16.49 7 16.3574 7ZM15.8574 10H13.8574V8H15.8574V10ZM16.3574 2H13.3574C13.2248 2 13.0976 2.05268 13.0039 2.14645C12.9101 2.24021 12.8574 2.36739 12.8574 2.5V5.5C12.8574 5.63261 12.9101 5.75979 13.0039 5.85355C13.0976 5.94732 13.2248 6 13.3574 6H16.3574C16.49 6 16.6172 5.94732 16.711 5.85355C16.8047 5.75979 16.8574 5.63261 16.8574 5.5V2.5C16.8574 2.36739 16.8047 2.24021 16.711 2.14645C16.6172 2.05268 16.49 2 16.3574 2ZM15.8574 5H13.8574V3H15.8574V5ZM11.3574 7H8.35742C8.22481 7 8.09764 7.05268 8.00387 7.14645C7.9101 7.24021 7.85742 7.36739 7.85742 7.5V10.5C7.85742 10.6326 7.9101 10.7598 8.00387 10.8536C8.09764 10.9473 8.22481 11 8.35742 11H11.3574C11.49 11 11.6172 10.9473 11.711 10.8536C11.8047 10.7598 11.8574 10.6326 11.8574 10.5V7.5C11.8574 7.36739 11.8047 7.24021 11.711 7.14645C11.6172 7.05268 11.49 7 11.3574 7ZM10.8574 10H8.85742V8H10.8574V10ZM11.3574 2H8.35742C8.22481 2 8.09764 2.05268 8.00387 2.14645C7.9101 2.24021 7.85742 2.36739 7.85742 2.5V5.5C7.85742 5.63261 7.9101 5.75979 8.00387 5.85355C8.09764 5.94732 8.22481 6 8.35742 6H11.3574C11.49 6 11.6172 5.94732 11.711 5.85355C11.8047 5.75979 11.8574 5.63261 11.8574 5.5V2.5C11.8574 2.36739 11.8047 2.24021 11.711 2.14645C11.6172 2.05268 11.49 2 11.3574 2ZM10.8574 5H8.85742V3H10.8574V5ZM11.3574 12H8.35742C8.22481 12 8.09764 12.0527 8.00387 12.1464C7.9101 12.2402 7.85742 12.3674 7.85742 12.5V15.5C7.85742 15.6326 7.9101 15.7598 8.00387 15.8536C8.09764 15.9473 8.22481 16 8.35742 16H11.3574C11.49 16 11.6172 15.9473 11.711 15.8536C11.8047 15.7598 11.8574 15.6326 11.8574 15.5V12.5C11.8574 12.3674 11.8047 12.2402 11.711 12.1464C11.6172 12.0527 11.49 12 11.3574 12ZM10.8574 15H8.85742V13H10.8574V15ZM11.3574 17H8.35742C8.22481 17 8.09764 17.0527 8.00387 17.1464C7.9101 17.2402 7.85742 17.3674 7.85742 17.5V20.5C7.85742 20.6326 7.9101 20.7598 8.00387 20.8536C8.09764 20.9473 8.22481 21 8.35742 21H11.3574C11.49 21 11.6172 20.9473 11.711 20.8536C11.8047 20.7598 11.8574 20.6326 11.8574 20.5V17.5C11.8574 17.3674 11.8047 17.2402 11.711 17.1464C11.6172 17.0527 11.49 17 11.3574 17ZM10.8574 20H8.85742V18H10.8574V20ZM20.8574 23H23.8574C23.99 23 24.1172 22.9473 24.211 22.8536C24.3047 22.7598 24.3574 22.6326 24.3574 22.5V19.5C24.3574 19.3674 24.3047 19.2402 24.211 19.1464C24.1172 19.0527 23.99 19 23.8574 19H20.8574C20.7248 19 20.5976 19.0527 20.5039 19.1464C20.4101 19.2402 20.3574 19.3674 20.3574 19.5V22.5C20.3574 22.6326 20.4101 22.7598 20.5039 22.8536C20.5976 22.9473 20.7248 23 20.8574 23ZM20.8574 18H23.8574C23.99 18 24.1172 17.9473 24.211 17.8536C24.3047 17.7598 24.3574 17.6326 24.3574 17.5V14.5C24.3574 14.3674 24.3047 14.2402 24.211 14.1464C24.1172 14.0527 23.99 14 23.8574 14H20.8574C20.7248 14 20.5976 14.0527 20.5039 14.1464C20.4101 14.2402 20.3574 14.3674 20.3574 14.5V17.5C20.3574 17.6326 20.4101 17.7598 20.5039 17.8536C20.5976 17.9473 20.7248 18 20.8574 18ZM20.8574 28H23.8574C23.99 28 24.1172 27.9473 24.211 27.8536C24.3047 27.7598 24.3574 27.6326 24.3574 27.5V24.5C24.3574 24.3674 24.3047 24.2402 24.211 24.1464C24.1172 24.0527 23.99 24 23.8574 24H20.8574C20.7248 24 20.5976 24.0527 20.5039 24.1464C20.4101 24.2402 20.3574 24.3674 20.3574 24.5V27.5C20.3574 27.6326 20.4101 27.7598 20.5039 27.8536C20.5976 27.9473 20.7248 28 20.8574 28ZM15.8574 23H18.8574C18.99 23 19.1172 22.9473 19.211 22.8536C19.3047 22.7598 19.3574 22.6326 19.3574 22.5V19.5C19.3574 19.3674 19.3047 19.2402 19.211 19.1464C19.1172 19.0527 18.99 19 18.8574 19H15.8574C15.7248 19 15.5976 19.0527 15.5039 19.1464C15.4101 19.2402 15.3574 19.3674 15.3574 19.5V22.5C15.3574 22.6326 15.4101 22.7598 15.5039 22.8536C15.5976 22.9473 15.7248 23 15.8574 23ZM15.8574 18H18.8574C18.99 18 19.1172 17.9473 19.211 17.8536C19.3047 17.7598 19.3574 17.6326 19.3574 17.5V14.5C19.3574 14.3674 19.3047 14.2402 19.211 14.1464C19.1172 14.0527 18.99 14 18.8574 14H15.8574C15.7248 14 15.5976 14.0527 15.5039 14.1464C15.4101 14.2402 15.3574 14.3674 15.3574 14.5V17.5C15.3574 17.6326 15.4101 17.7598 15.5039 17.8536C15.5976 17.9473 15.7248 18 15.8574 18ZM15.8574 28H18.8574C18.99 28 19.1172 27.9473 19.211 27.8536C19.3047 27.7598 19.3574 27.6326 19.3574 27.5V24.5C19.3574 24.3674 19.3047 24.2402 19.211 24.1464C19.1172 24.0527 18.99 24 18.8574 24H15.8574C15.7248 24 15.5976 24.0527 15.5039 24.1464C15.4101 24.2402 15.3574 24.3674 15.3574 24.5V27.5C15.3574 27.6326 15.4101 27.7598 15.5039 27.8536C15.5976 27.9473 15.7248 28 15.8574 28Z"
                    fill="#D5E5E0"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_5691_85202">
                  <rect width="30" height="30" fill="white" transform="translate(0.357422)" />
                </clipPath>
                <clipPath id="clip1_5691_85202">
                  <rect width="10" height="16" fill="white" transform="translate(14.3574 12)" />
                </clipPath>
              </defs>
            </svg>`;
      }
    });
  });
  const buttons2 = document.querySelector(".section-collections").querySelectorAll(".btn-2");
  buttons2.forEach((btn2) => {
    btn2.addEventListener("click", () => {
      buttons2.forEach((btn) => btn.classList.remove("btn-2-active"));
      btn2.classList.toggle("btn-2-active");
    });
  });
  // const collectionsContainer = document.querySelector(".collections-container");
  // dataCollections.forEach((collection) => {
  //   collectionsContainer.innerHTML += `<a href="${collection.href}" class="collection-item">
  //           <div class="image-container">
  //             <img src="${collection.img}" alt="" />
  //           </div>
  //           <div class="rate-container">
  //             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  //               <path
  //                 d="M7 0.5L9.0161 4.72507L13.6574 5.33688L10.2621 8.55993L11.1145 13.1631L7 10.93L2.8855 13.1631L3.73788 8.55993L0.342604 5.33688L4.9839 4.72507L7 0.5Z"
  //                 fill="#FF6B00"
  //               />
  //             </svg>
  //             <p class="star">${collection.star}</p>
  //             <p class="review">(${collection.review} lượt đánh giá)</p>
  //           </div>
  //           <p class="download-count">${collection.download}+ lượt tải xuống</p>
  //           <h4>${collection.title}</h4>
  //           <button class="download-btn">
  //             Tải xuống
  //             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  //               <path
  //                 d="M4 14.5H12M8 2.5V11.8333M8 11.8333L11.3333 8.5M8 11.8333L4.66667 8.5"
  //                 stroke="#0B4523"
  //                 stroke-width="1.5"
  //                 stroke-linecap="round"
  //                 stroke-linejoin="round"
  //               />
  //             </svg>
  //           </button>
  //         </a>`;
  // });

  // SECTION: section 7
  const trademarkImagesScrollContainer = document.querySelector(".trademark-images-container-scroll");
  let once = false;
  window.addEventListener("scroll", () => {
    if (!once) {
      const rect = trademarkImagesScrollContainer.getBoundingClientRect();
      if (Math.floor(rect.height) >= Math.floor(window.innerHeight)) {
        if (
          Math.floor(rect.top) <= Math.floor(window.innerHeight - window.innerHeight * 1) &&
          Math.floor(rect.bottom) >= Math.floor(window.innerHeight * 1)
        ) {
          kKao4AutoScrollElement(".trademark-images-container-scroll-noi-that");
          kKao4AutoScrollElement(".trademark-images-container-scroll-ngoai-that");
          kKao4AutoScrollElement(".trademark-images-container-scroll-noi-tang-canh-quan");
          once = true;
        }
      } else if (Math.floor(rect.height) < Math.floor(window.innerHeight)) {
        if (
          window.innerHeight - Math.floor(rect.top) >= Math.floor(rect.height * 0) &&
          Math.floor(rect.bottom) >= Math.floor(rect.height * 0)
        ) {
          kKao4AutoScrollElement(".trademark-images-container-scroll-noi-that");
          kKao4AutoScrollElement(".trademark-images-container-scroll-ngoai-that");
          kKao4AutoScrollElement(".trademark-images-container-scroll-noi-tang-canh-quan");
          once = true;
        }
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", init);
