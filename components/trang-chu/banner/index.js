function init() {
  const swiperBanner = new kKao4PaginationSwapSwiper(
    ".swiper-banner",
    {
      slidesPerViewAndGroup: 4,
      activeStyle: { backgroundColor: "#262626" },
      normalStyle: { backgroundColor: "#ececec" },
    },
    {
      speed: 600,
      slidesPerView: 4,
      spaceBetween: (window.innerWidth / 100) * 1.17,
      slidesPerGroup: 4,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    }
  );
}

window.addEventListener("DOMContentLoaded", init);
