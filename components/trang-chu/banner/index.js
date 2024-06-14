function init() {
  const width = window.innerWidth;
  const swiperBanner = new kKao4PaginationSwapSwiper(
    ".swiper-banner",
    {
      slidesPerViewAndGroup: width < 768 ? 1 : 4,
      activeStyle: { backgroundColor: "#262626", zIndex: 1 },
      normalStyle: { backgroundColor: "#ececec" },
    },
    {
      speed: 800,
      slidesPerView: width < 768 ? 1 : 4,
      spaceBetween: (window.innerWidth / 100) * 1.17,
      slidesPerGroup: width < 768 ? 1 : 4,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    }
  );
}

window.addEventListener("DOMContentLoaded", init);
