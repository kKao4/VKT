function init() {
  const swiperGreatPartner = new Swiper(".swiper-outstanding-partner", {
    slidesPerView: 2.2,
    slidesPerGroup: 1,
    speed: 800,
    spaceBetween: (window.innerWidth / 100) * 0.87,
    loop: true,
    navigation: {
      prevEl: ".swiper-outstanding-partner-prev-btn",
      nextEl: ".swiper-outstanding-partner-next-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 8,
      },
    },
  });
}

window.addEventListener("DOMContentLoaded", init);
