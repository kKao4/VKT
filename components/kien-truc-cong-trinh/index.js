function init() {
  const width = window.innerWidth;
  /* SECTION: section các đối tác tuyệt vời của chúng tôi */
  const swiperGreatPartner = new Swiper(".swiper-great-partner", {
    slidesPerView: 2.2,
    slidesPerGroup: 1,
    speed: 800,
    spaceBetween: (window.innerWidth / 100) * (width < 768 ? 0.5 : 0.87) * (width < 768 ? 4.267 : 1),
    loop: true,
    navigation: {
      prevEl: ".swiper-great-partner-prev-btn",
      nextEl: ".swiper-great-partner-next-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 8,
      },
    },
  });
  /* SECTION: section thể loại công trình được quan tâm nhất */
  const swiperInterestProject = new Swiper(".swiper-interest-project", {
    slidesPerView: 1.1,
    slidesPerGroup: 1,
    speed: 800,
    spaceBetween: (window.innerWidth / 100) * (width < 768 ? 0.75 : 1) * (width < 768 ? 4.267 : 1),
    loop: true,
    navigation: {
      prevEl: ".swiper-interest-project-prev-btn",
      nextEl: ".swiper-interest-project-next-btn",
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
    },
  });
  // SECTION: section thương hiệu uy tín trên thị trường
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
          kKao4AutoScrollElement(".trademark-images-container-scroll");
          once = true;
        }
      } else if (Math.floor(rect.height) < Math.floor(window.innerHeight)) {
        if (
          window.innerHeight - Math.floor(rect.top) >= Math.floor(rect.height * 0) &&
          Math.floor(rect.bottom) >= Math.floor(rect.height * 0)
        ) {
          kKao4AutoScrollElement(".trademark-images-container-scroll");
          once = true;
        }
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", init);
