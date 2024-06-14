function init() {
  const width = window.innerWidth;
  const activeIndexElement = document.querySelector(".swiper-active-slide");
  const totalIndexElement = document.querySelector(".swiper-total-slide");
  const swiperBrand = new kKao4PaginationSwapSwiper(
    ".swiper-brand",
    {
      slidesPerViewAndGroup: width < 768 ? 1 : 3,
      activeStyle: { backgroundColor: "#262626", zIndex: 1 },
      normalStyle: { backgroundColor: "#ececec" },
    },
    {
      slidesPerView: width < 768 ? 1 : 3,
      slidesPerGroup: width < 768 ? 1 : 3,
      speed: 800,
      loop: true,
      spaceBetween: (window.innerWidth / 100) * (width < 768 ? 0.75 : 1.5) * (width < 768 ? 4.267 : 1),
      navigation: {
        prevEl: ".swiper-brand-prev-btn",
        nextEl: ".swiper-brand-next-btn",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    }
  );
  totalIndexElement.textContent = formatNumber(
    Math.round(swiperBrand.slides.length / swiperBrand.slidesPerViewDynamic())
  );
  swiperBrand.on("slideChange", (swiper) => {
    activeIndexElement.textContent = formatNumber(
      Math.round(swiper.realIndex / swiperBrand.slidesPerViewDynamic() + 1)
    );
  });
}

window.addEventListener("DOMContentLoaded", init);
