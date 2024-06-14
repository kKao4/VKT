function init() {
  const width = window.innerWidth;
  const swiperDocument = new Swiper(".swiper-document", {
    slidesPerView: 2.1,
    slidesPerGroup: 1,
    speed: 800,
    spaceBetween: (window.innerWidth / 100) * (width < 768 ? 0.5 : 1.25) * (width < 768 ? 4.267 : 1),
    navigation: {
      prevEl: ".swiper-document-prev-btn",
      nextEl: ".swiper-document-next-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
    },
  });
  // const swiperWrapperDocument = document.querySelector(".swiper-document").querySelector(".swiper-wrapper");
  // dataDocuments.forEach((document) => {
  //   swiperWrapperDocument.innerHTML += `<div class="swiper-slide">
  //               <div class="image-container">
  //                 <img src="${document.img}" alt="" />
  //               </div>
  //               <p class="download-count">${document.download}+ lượt tải xuống</p>
  //               <h4>${document.title}</h4>
  //               <button class="download-btn">
  //                 Tải xuống
  //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
  //                   <path
  //                     d="M4 14.5H12M8 2.5V11.8333M8 11.8333L11.3333 8.5M8 11.8333L4.66667 8.5"
  //                     stroke="#0B4523"
  //                     stroke-width="1.5"
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                   />
  //                 </svg>
  //               </button>
  //             </div>`;
  // });
}

window.addEventListener("DOMContentLoaded", init);
