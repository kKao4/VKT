function init() {
  const activeIndexElement = document.querySelector(".swiper-active-slide");
  const totalIndexElement = document.querySelector(".swiper-total-slide");
  const swiperBrand = new kKao4PaginationSwapSwiper(
    ".swiper-brand",
    {
      slidesPerViewAndGroup: 3,
      activeStyle: { backgroundColor: "#262626" },
      normalStyle: { backgroundColor: "#ececec" },
    },
    {
      slidesPerView: 3,
      slidesPerGroup: 3,
      speed: 600,
      loop: true,
      spaceBetween: (window.innerWidth / 100) * 1.5,
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
